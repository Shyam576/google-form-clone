
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { PageDto } from '../../common/dto/page.dto.ts';
import { Auth } from '../../decorators/http.decorators';
import { CreateFormResponseDto } from './dtos/create-form-response.dto.ts';
import type { FormResponseDto } from './dtos/form-response.dto.ts';
import { PageOptionsFormResponseDto } from './dtos/page-options-form-response.dto.ts';
import { UpdateFormResponseDto } from './dtos/update-form-response.dto.ts';
import { FormResponseService } from './form-response.service.ts';

@Controller('form-responses')
@ApiTags('form-responses')
export class FormResponseController {
  constructor(private formResponseService: FormResponseService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormResponseDto: CreateFormResponseDto) {
    const entity = await this.formResponseService.create(createFormResponseDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormResponseDto: PageOptionsFormResponseDto){
    return this.formResponseService.getAll(pageOptionsFormResponseDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormResponseDto> {
    const entity = await this.formResponseService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Get(':id/complete')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getCompleteResponse(@Param('id') id: string) {
    return this.formResponseService.getCompleteResponse(id as Uuid);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormResponseDto: UpdateFormResponseDto,
  ): Promise<void> {
    return this.formResponseService.update(id as Uuid, updateFormResponseDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formResponseService.delete(id as Uuid);
  }
}