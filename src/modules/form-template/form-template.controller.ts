
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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import type { PageDto } from '../../common/dto/page.dto.ts';
import { Auth } from '../../decorators/http.decorators';
import { CreateFormTemplateDto } from './dtos/create-form-template.dto.ts';
import type { FormTemplateDto } from './dtos/form-template.dto.ts';
import { PageOptionsFormTemplateDto } from './dtos/page-options-form-template.dto.ts';
import { UpdateFormTemplateDto } from './dtos/update-form-template.dto.ts';
import { FormTemplateService } from './form-template.service.ts';

@Controller('form-templates')
@ApiTags('form-templates')
export class FormTemplateController {
  constructor(private formTemplateService: FormTemplateService) {}

  @Post()
  @ApiResponse({type: CreateFormTemplateDto})
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormTemplateDto: CreateFormTemplateDto) {
    const entity = await this.formTemplateService.create(createFormTemplateDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormTemplateDto: PageOptionsFormTemplateDto){
    return this.formTemplateService.getAll(pageOptionsFormTemplateDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormTemplateDto> {
    const entity = await this.formTemplateService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormTemplateDto: UpdateFormTemplateDto,
  ): Promise<void> {
    return this.formTemplateService.update(id as Uuid, updateFormTemplateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formTemplateService.delete(id as Uuid);
  }
}