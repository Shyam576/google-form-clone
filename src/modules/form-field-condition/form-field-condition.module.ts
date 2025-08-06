
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormFieldConditionHandler } from './commands/create-form-field-condition.command.ts';
import { FormFieldConditionController } from './form-field-condition.controller.ts';
import { FormFieldConditionEntity } from './form-field-condition.entity.ts';
import { FormFieldConditionService } from './form-field-condition.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormFieldConditionEntity]),
  ],
  providers: [FormFieldConditionService, CreateFormFieldConditionHandler],
  controllers: [FormFieldConditionController],
})
export class FormFieldConditionModule {}