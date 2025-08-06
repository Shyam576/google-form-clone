
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormResponseAnswerHandler } from './commands/create-form-response-answer.command.ts';
import { FormResponseAnswerController } from './form-response-answer.controller.ts';
import { FormResponseAnswerEntity } from './form-response-answer.entity.ts';
import { FormResponseAnswerService } from './form-response-answer.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormResponseAnswerEntity]),
  ],
  providers: [FormResponseAnswerService, CreateFormResponseAnswerHandler],
  controllers: [FormResponseAnswerController],
})
export class FormResponseAnswerModule {}