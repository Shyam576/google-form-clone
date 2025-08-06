
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
import { CreateFormSectionDto } from './dtos/create-form-section.dto.ts';
import type { FormSectionDto } from './dtos/form-section.dto.ts';
import { PageOptionsFormSectionDto } from './dtos/page-options-form-section.dto.ts';
import { UpdateFormSectionDto } from './dtos/update-form-section.dto.ts';
import { FormSectionService } from './form-section.service.ts';

@Controller('form-sections')
@ApiTags('form-sections')
export class FormSectionController {
  constructor(private formSectionService: FormSectionService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormSectionDto: CreateFormSectionDto) {
    const entity = await this.formSectionService.create(createFormSectionDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormSectionDto: PageOptionsFormSectionDto){
    return this.formSectionService.getAll(pageOptionsFormSectionDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormSectionDto> {
    const entity = await this.formSectionService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormSectionDto: UpdateFormSectionDto,
  ): Promise<void> {
    return this.formSectionService.update(id as Uuid, updateFormSectionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formSectionService.delete(id as Uuid);
  }
}