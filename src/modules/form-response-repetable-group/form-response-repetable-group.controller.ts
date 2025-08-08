
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
import { CreateFormResponseRepetableGroupDto } from './dtos/create-form-response-repetable-group.dto.ts';
import type { FormResponseRepetableGroupDto } from './dtos/form-response-repetable-group.dto.ts';
import { PageOptionsFormResponseRepetableGroupDto } from './dtos/page-options-form-response-repetable-group.dto.ts';
import { UpdateFormResponseRepetableGroupDto } from './dtos/update-form-response-repetable-group.dto.ts';
import { FormResponseRepetableGroupService } from './form-response-repetable-group.service.ts';

@Controller('form-response-repetable-groups')
@ApiTags('form-response-repetable-groups')
export class FormResponseRepetableGroupController {
  constructor(private formResponseRepetableGroupService: FormResponseRepetableGroupService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormResponseRepetableGroupDto: CreateFormResponseRepetableGroupDto) {
    const entity = await this.formResponseRepetableGroupService.create(createFormResponseRepetableGroupDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormResponseRepetableGroupDto: PageOptionsFormResponseRepetableGroupDto){
    return this.formResponseRepetableGroupService.getAll(pageOptionsFormResponseRepetableGroupDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormResponseRepetableGroupDto> {
    const entity = await this.formResponseRepetableGroupService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormResponseRepetableGroupDto: UpdateFormResponseRepetableGroupDto,
  ): Promise<void> {
    return this.formResponseRepetableGroupService.update(id as Uuid, updateFormResponseRepetableGroupDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formResponseRepetableGroupService.delete(id as Uuid);
  }
}