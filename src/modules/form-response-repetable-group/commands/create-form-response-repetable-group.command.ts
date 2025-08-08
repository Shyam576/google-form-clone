
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateFormResponseRepetableGroupDto } from '../dtos/create-form-response-repetable-group.dto.ts';
import { FormResponseRepetableGroupEntity } from '../form-response-repetable-group.entity.ts';
import { FormResponseRepetableGroupService } from '../form-response-repetable-group.service.ts';

export class CreateFormResponseRepetableGroupCommand {
  constructor(public readonly dto: CreateFormResponseRepetableGroupDto) {}
}

@CommandHandler(CreateFormResponseRepetableGroupCommand)
export class CreateFormResponseRepetableGroupHandler implements ICommandHandler<CreateFormResponseRepetableGroupCommand> {
  constructor(private readonly service: FormResponseRepetableGroupService) {}

  async execute(command: CreateFormResponseRepetableGroupCommand): Promise<FormResponseRepetableGroupEntity> {
    return this.service.create(command.dto);
  }
}