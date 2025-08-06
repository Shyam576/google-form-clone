
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormTemplateEntity } from './form-template.entity.ts';
import type { CreateFormTemplateDto } from './dtos/create-form-template.dto.ts';
import type { UpdateFormTemplateDto } from './dtos/update-form-template.dto.ts';
import { PageOptionsFormTemplateDto } from './dtos/page-options-form-template.dto.ts';


@Injectable()
export class FormTemplateService {
  constructor(
    @InjectRepository(FormTemplateEntity)
    private readonly repo: Repository<FormTemplateEntity>,
  ) {}

  async create(createDto: CreateFormTemplateDto): Promise<FormTemplateEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormTemplateDto:PageOptionsFormTemplateDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormTemplateEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormTemplateDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}