
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormRepetableGroupDto } from '../dtos/create-form-repetable-group.dto.ts';
import { FormRepetableGroupEntity } from '../form-repetable-group.entity.ts';
import { FormRepetableGroupService } from '../form-repetable-group.service.ts';

export class CreateFormRepetableGroupCommand {
  constructor(public readonly dto: CreateFormRepetableGroupDto) {}
}

@CommandHandler(CreateFormRepetableGroupCommand)
export class CreateFormRepetableGroupHandler implements ICommandHandler<CreateFormRepetableGroupCommand> {
  constructor(private readonly service: FormRepetableGroupService) {}

  async execute(command: CreateFormRepetableGroupCommand): Promise<FormRepetableGroupEntity> {
    return this.service.create(command.dto);
  }
}