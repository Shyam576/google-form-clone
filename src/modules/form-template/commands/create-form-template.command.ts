
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormTemplateDto } from '../dtos/create-form-template.dto.ts';
import { FormTemplateEntity } from '../form-template.entity.ts';
import { FormTemplateService } from '../form-template.service.ts';

export class CreateFormTemplateCommand {
  constructor(public readonly dto: CreateFormTemplateDto) {}
}

@CommandHandler(CreateFormTemplateCommand)
export class CreateFormTemplateHandler implements ICommandHandler<CreateFormTemplateCommand> {
  constructor(private readonly service: FormTemplateService) {}

  async execute(command: CreateFormTemplateCommand): Promise<FormTemplateEntity> {
    return this.service.create(command.dto);
  }
}