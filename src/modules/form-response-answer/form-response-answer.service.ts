
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormResponseAnswerEntity } from './form-response-answer.entity.ts';
import type { CreateFormResponseAnswerDto } from './dtos/create-form-response-answer.dto.ts';
import type { UpdateFormResponseAnswerDto } from './dtos/update-form-response-answer.dto.ts';
import { PageOptionsFormResponseAnswerDto } from './dtos/page-options-form-response-answer.dto.ts';


@Injectable()
export class FormResponseAnswerService {
  constructor(
    @InjectRepository(FormResponseAnswerEntity)
    private readonly repo: Repository<FormResponseAnswerEntity>,
  ) {}

  async create(createDto: CreateFormResponseAnswerDto): Promise<FormResponseAnswerEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormResponseAnswerDto:PageOptionsFormResponseAnswerDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormResponseAnswerEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateFormResponseAnswerDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}