
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
import { CreateFormResponseAnswerDto } from './dtos/create-form-response-answer.dto.ts';
import type { FormResponseAnswerDto } from './dtos/form-response-answer.dto.ts';
import { PageOptionsFormResponseAnswerDto } from './dtos/page-options-form-response-answer.dto.ts';
import { UpdateFormResponseAnswerDto } from './dtos/update-form-response-answer.dto.ts';
import { FormResponseAnswerService } from './form-response-answer.service.ts';

@Controller('form-response-answers')
@ApiTags('form-response-answers')
export class FormResponseAnswerController {
  constructor(private formResponseAnswerService: FormResponseAnswerService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormResponseAnswerDto: CreateFormResponseAnswerDto) {
    const entity = await this.formResponseAnswerService.create(createFormResponseAnswerDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormResponseAnswerDto: PageOptionsFormResponseAnswerDto){
    return this.formResponseAnswerService.getAll(pageOptionsFormResponseAnswerDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormResponseAnswerDto> {
    const entity = await this.formResponseAnswerService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormResponseAnswerDto: UpdateFormResponseAnswerDto,
  ): Promise<void> {
    return this.formResponseAnswerService.update(id as Uuid, updateFormResponseAnswerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formResponseAnswerService.delete(id as Uuid);
  }
}