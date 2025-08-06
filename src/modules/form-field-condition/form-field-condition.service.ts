
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormFieldConditionEntity } from './form-field-condition.entity.ts';
import type { CreateFormFieldConditionDto } from './dtos/create-form-field-condition.dto.ts';
import type { UpdateFormFieldConditionDto } from './dtos/update-form-field-condition.dto.ts';
import { PageOptionsFormFieldConditionDto } from './dtos/page-options-form-field-condition.dto.ts';


@Injectable()
export class FormFieldConditionService {
  constructor(
    @InjectRepository(FormFieldConditionEntity)
    private readonly repo: Repository<FormFieldConditionEntity>,
  ) {}

  async create(createDto: CreateFormFieldConditionDto): Promise<FormFieldConditionEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormFieldConditionDto:PageOptionsFormFieldConditionDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormFieldConditionEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormFieldConditionDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}