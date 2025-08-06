
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormFieldDto } from '../dtos/create-form-field.dto.ts';
import { FormFieldEntity } from '../form-field.entity.ts';
import { FormFieldService } from '../form-field.service.ts';

export class CreateFormFieldCommand {
  constructor(public readonly dto: CreateFormFieldDto) {}
}

@CommandHandler(CreateFormFieldCommand)
export class CreateFormFieldHandler implements ICommandHandler<CreateFormFieldCommand> {
  constructor(private readonly service: FormFieldService) {}

  async execute(command: CreateFormFieldCommand): Promise<FormFieldEntity> {
    return this.service.create(command.dto);
  }
}