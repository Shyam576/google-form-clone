
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormSectionEntity } from './form-section.entity.ts';
import type { CreateFormSectionDto } from './dtos/create-form-section.dto.ts';
import type { UpdateFormSectionDto } from './dtos/update-form-section.dto.ts';
import { PageOptionsFormSectionDto } from './dtos/page-options-form-section.dto.ts';


@Injectable()
export class FormSectionService {
  constructor(
    @InjectRepository(FormSectionEntity)
    private readonly repo: Repository<FormSectionEntity>,
  ) {}

  async create(createDto: CreateFormSectionDto): Promise<FormSectionEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormSectionDto:PageOptionsFormSectionDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormSectionEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormSectionDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}