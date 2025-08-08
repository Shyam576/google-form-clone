
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormRepetableGroupEntity } from './form-repetable-group.entity.ts';
import type { CreateFormRepetableGroupDto } from './dtos/create-form-repetable-group.dto.ts';
import type { UpdateFormRepetableGroupDto } from './dtos/update-form-repetable-group.dto.ts';
import { PageOptionsFormRepetableGroupDto } from './dtos/page-options-form-repetable-group.dto.ts';


@Injectable()
export class FormRepetableGroupService {
  constructor(
    @InjectRepository(FormRepetableGroupEntity)
    private readonly repo: Repository<FormRepetableGroupEntity>,
  ) {}

  async create(createDto: CreateFormRepetableGroupDto): Promise<FormRepetableGroupEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormRepetableGroupDto:PageOptionsFormRepetableGroupDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormRepetableGroupEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormRepetableGroupDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}