
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
import { CreateFormFieldDto } from './dtos/create-form-field.dto.ts';
import type { FormFieldDto } from './dtos/form-field.dto.ts';
import { PageOptionsFormFieldDto } from './dtos/page-options-form-field.dto.ts';
import { UpdateFormFieldDto } from './dtos/update-form-field.dto.ts';
import { FormFieldService } from './form-field.service.ts';

@Controller('form-fields')
@ApiTags('form-fields')
export class FormFieldController {
  constructor(private formFieldService: FormFieldService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormFieldDto: CreateFormFieldDto) {
    const entity = await this.formFieldService.create(createFormFieldDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormFieldDto: PageOptionsFormFieldDto){
    return this.formFieldService.getAll(pageOptionsFormFieldDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormFieldDto> {
    const entity = await this.formFieldService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormFieldDto: UpdateFormFieldDto,
  ): Promise<void> {
    return this.formFieldService.update(id as Uuid, updateFormFieldDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formFieldService.delete(id as Uuid);
  }
}