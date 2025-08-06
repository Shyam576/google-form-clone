
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormResponseDto } from '../dtos/create-form-response.dto.ts';
import { FormResponseEntity } from '../form-response.entity.ts';
import { FormResponseService } from '../form-response.service.ts';

export class CreateFormResponseCommand {
  constructor(public readonly dto: CreateFormResponseDto) {}
}

@CommandHandler(CreateFormResponseCommand)
export class CreateFormResponseHandler implements ICommandHandler<CreateFormResponseCommand> {
  constructor(private readonly service: FormResponseService) {}

  async execute(command: CreateFormResponseCommand): Promise<FormResponseEntity> {
    return this.service.create(command.dto);
  }
}