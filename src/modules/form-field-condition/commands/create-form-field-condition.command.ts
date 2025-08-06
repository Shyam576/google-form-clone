
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormFieldConditionDto } from '../dtos/create-form-field-condition.dto.ts';
import { FormFieldConditionEntity } from '../form-field-condition.entity.ts';
import { FormFieldConditionService } from '../form-field-condition.service.ts';

export class CreateFormFieldConditionCommand {
  constructor(public readonly dto: CreateFormFieldConditionDto) {}
}

@CommandHandler(CreateFormFieldConditionCommand)
export class CreateFormFieldConditionHandler implements ICommandHandler<CreateFormFieldConditionCommand> {
  constructor(private readonly service: FormFieldConditionService) {}

  async execute(command: CreateFormFieldConditionCommand): Promise<FormFieldConditionEntity> {
    return this.service.create(command.dto);
  }
}