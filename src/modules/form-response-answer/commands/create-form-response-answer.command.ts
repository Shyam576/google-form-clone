
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormResponseAnswerDto } from '../dtos/create-form-response-answer.dto.ts';
import { FormResponseAnswerEntity } from '../form-response-answer.entity.ts';
import { FormResponseAnswerService } from '../form-response-answer.service.ts';

export class CreateFormResponseAnswerCommand {
  constructor(public readonly dto: CreateFormResponseAnswerDto) {}
}

@CommandHandler(CreateFormResponseAnswerCommand)
export class CreateFormResponseAnswerHandler implements ICommandHandler<CreateFormResponseAnswerCommand> {
  constructor(private readonly service: FormResponseAnswerService) {}

  async execute(command: CreateFormResponseAnswerCommand): Promise<FormResponseAnswerEntity> {
    return this.service.create(command.dto);
  }
}