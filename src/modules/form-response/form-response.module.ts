
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormResponseHandler } from './commands/create-form-response.command.ts';
import { FormResponseController } from './form-response.controller.ts';
import { FormResponseEntity } from './form-response.entity.ts';
import { FormResponseService } from './form-response.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormResponseEntity]),
  ],
  providers: [FormResponseService, CreateFormResponseHandler],
  controllers: [FormResponseController],
})
export class FormResponseModule {}