
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateTestHandler } from './commands/create-test.command.ts';
import { TestController } from './test.controller.ts';
import { TestEntity } from './test.entity.ts';
import { TestService } from './test.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity]),
  ],
  providers: [TestService, CreateTestHandler],
  controllers: [TestController],
})
export class TestModule {}