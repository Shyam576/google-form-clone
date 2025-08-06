
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormFieldEntity } from './form-field.entity.ts';
import type { CreateFormFieldDto } from './dtos/create-form-field.dto.ts';
import type { UpdateFormFieldDto } from './dtos/update-form-field.dto.ts';
import { PageOptionsFormFieldDto } from './dtos/page-options-form-field.dto.ts';


@Injectable()
export class FormFieldService {
  constructor(
    @InjectRepository(FormFieldEntity)
    private readonly repo: Repository<FormFieldEntity>,
  ) {}

  async create(createDto: CreateFormFieldDto): Promise<FormFieldEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormFieldDto:PageOptionsFormFieldDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormFieldEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormFieldDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}