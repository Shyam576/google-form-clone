
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormSectionDto } from '../dtos/create-form-section.dto.ts';
import { FormSectionEntity } from '../form-section.entity.ts';
import { FormSectionService } from '../form-section.service.ts';

export class CreateFormSectionCommand {
  constructor(public readonly dto: CreateFormSectionDto) {}
}

@CommandHandler(CreateFormSectionCommand)
export class CreateFormSectionHandler implements ICommandHandler<CreateFormSectionCommand> {
  constructor(private readonly service: FormSectionService) {}

  async execute(command: CreateFormSectionCommand): Promise<FormSectionEntity> {
    return this.service.create(command.dto);
  }
}