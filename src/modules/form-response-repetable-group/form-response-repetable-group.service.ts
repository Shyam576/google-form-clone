
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormResponseRepetableGroupEntity } from './form-response-repetable-group.entity.ts';
import type { CreateFormResponseRepetableGroupDto } from './dtos/create-form-response-repetable-group.dto.ts';
import type { UpdateFormResponseRepetableGroupDto } from './dtos/update-form-response-repetable-group.dto.ts';
import { PageOptionsFormResponseRepetableGroupDto } from './dtos/page-options-form-response-repetable-group.dto.ts';


@Injectable()
export class FormResponseRepetableGroupService {
  constructor(
    @InjectRepository(FormResponseRepetableGroupEntity)
    private readonly repo: Repository<FormResponseRepetableGroupEntity>,
  ) {}

  async create(createDto: CreateFormResponseRepetableGroupDto): Promise<FormResponseRepetableGroupEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormResponseRepetableGroupDto:PageOptionsFormResponseRepetableGroupDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormResponseRepetableGroupEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormResponseRepetableGroupDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}