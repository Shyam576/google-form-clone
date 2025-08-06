
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
import { CreateFormFieldConditionDto } from './dtos/create-form-field-condition.dto.ts';
import type { FormFieldConditionDto } from './dtos/form-field-condition.dto.ts';
import { PageOptionsFormFieldConditionDto } from './dtos/page-options-form-field-condition.dto.ts';
import { UpdateFormFieldConditionDto } from './dtos/update-form-field-condition.dto.ts';
import { FormFieldConditionService } from './form-field-condition.service.ts';

@Controller('form-field-conditions')
@ApiTags('form-field-conditions')
export class FormFieldConditionController {
  constructor(private formFieldConditionService: FormFieldConditionService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormFieldConditionDto: CreateFormFieldConditionDto) {
    const entity = await this.formFieldConditionService.create(createFormFieldConditionDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormFieldConditionDto: PageOptionsFormFieldConditionDto){
    return this.formFieldConditionService.getAll(pageOptionsFormFieldConditionDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormFieldConditionDto> {
    const entity = await this.formFieldConditionService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormFieldConditionDto: UpdateFormFieldConditionDto,
  ): Promise<void> {
    return this.formFieldConditionService.update(id as Uuid, updateFormFieldConditionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formFieldConditionService.delete(id as Uuid);
  }
}