
import type { ICommandHandler } from '@nestjs/cqrs';
import {CommandHandler} from '@nestjs/cqrs';
import { CreateTestDto } from '../dtos/create-test.dto.ts';
import { TestEntity } from '../test.entity.ts';
import { TestService } from '../test.service.ts';

export class CreateTestCommand {
  constructor(public readonly dto: CreateTestDto) {}
}

@CommandHandler(CreateTestCommand)
export class CreateTestHandler implements ICommandHandler<CreateTestCommand> {
  constructor(private readonly service: TestService) {}

  async execute(command: CreateTestCommand): Promise<TestEntity> {
    return this.service.create(command.dto);
  }
}