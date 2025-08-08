
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
import { CreateFormRepetableGroupDto } from './dtos/create-form-repetable-group.dto.ts';
import type { FormRepetableGroupDto } from './dtos/form-repetable-group.dto.ts';
import { PageOptionsFormRepetableGroupDto } from './dtos/page-options-form-repetable-group.dto.ts';
import { UpdateFormRepetableGroupDto } from './dtos/update-form-repetable-group.dto.ts';
import { FormRepetableGroupService } from './form-repetable-group.service.ts';

@Controller('form-repetable-groups')
@ApiTags('form-repetable-groups')
export class FormRepetableGroupController {
  constructor(private formRepetableGroupService: FormRepetableGroupService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createFormRepetableGroupDto: CreateFormRepetableGroupDto) {
    const entity = await this.formRepetableGroupService.create(createFormRepetableGroupDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsFormRepetableGroupDto: PageOptionsFormRepetableGroupDto){
    return this.formRepetableGroupService.getAll(pageOptionsFormRepetableGroupDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<FormRepetableGroupDto> {
    const entity = await this.formRepetableGroupService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateFormRepetableGroupDto: UpdateFormRepetableGroupDto,
  ): Promise<void> {
    return this.formRepetableGroupService.update(id as Uuid, updateFormRepetableGroupDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.formRepetableGroupService.delete(id as Uuid);
  }
}