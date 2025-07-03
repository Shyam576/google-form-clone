
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TestEntity } from './test.entity.ts';
import type { CreateTestDto } from './dtos/create-test.dto.ts';
import type { UpdateTestDto } from './dtos/update-test.dto.ts';
import { PageOptionsTestDto } from './dtos/page-options-test.dto.ts';


@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly repo: Repository<TestEntity>,
  ) {}

  async create(createDto: CreateTestDto): Promise<TestEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsTestDto:PageOptionsTestDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<TestEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async update(id: string, updateDto: UpdateTestDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}