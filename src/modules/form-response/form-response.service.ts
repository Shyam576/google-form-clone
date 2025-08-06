
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FormResponseEntity } from './form-response.entity.ts';
import type { CreateFormResponseDto } from './dtos/create-form-response.dto.ts';
import type { UpdateFormResponseDto } from './dtos/update-form-response.dto.ts';
import { PageOptionsFormResponseDto } from './dtos/page-options-form-response.dto.ts';


@Injectable()
export class FormResponseService {
  constructor(
    @InjectRepository(FormResponseEntity)
    private readonly repo: Repository<FormResponseEntity>,
  ) {}

  async create(createDto: CreateFormResponseDto): Promise<FormResponseEntity> {
    const entity = this.repo.create(createDto);
    return this.repo.save(entity);
  }

  async getAll(pageOptionsFormResponseDto:PageOptionsFormResponseDto){
    return this.repo.find();
  }

  async getSingle(id: string): Promise<FormResponseEntity> {
    const entity = await this.repo.findOneBy({ id: id as Uuid });
    if (!entity) throw new NotFoundException();
    return entity;
  }

  async getCompleteResponse(id: string) {
    const formResponse = await this.repo.findOne({
      where: { id: id as Uuid },
      relations: {
        formTemplate: {
          sections: {
            fields: {
              conditions: true
            }
          }
        },
        answers: {
          section: true,
          field: true
        }
      },
      order: {
        formTemplate: {
          sections: {
            order: 'ASC',
            fields: {
              order: 'ASC'
            }
          }
        }
      }
    });

    if (!formResponse) {
      throw new NotFoundException('Form response not found');
    }

    return formResponse;
  }

  async update(id: string, updateDto: UpdateFormResponseDto): Promise<void> {
    await this.repo.update(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}