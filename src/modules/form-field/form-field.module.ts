
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormFieldHandler } from './commands/create-form-field.command.ts';
import { FormFieldController } from './form-field.controller.ts';
import { FormFieldEntity } from './form-field.entity.ts';
import { FormFieldService } from './form-field.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormFieldEntity]),
  ],
  providers: [FormFieldService, CreateFormFieldHandler],
  controllers: [FormFieldController],
})
export class FormFieldModule {}