
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormTemplateHandler } from './commands/create-form-template.command.ts';
import { FormTemplateController } from './form-template.controller.ts';
import { FormTemplateEntity } from './form-template.entity.ts';
import { FormTemplateService } from './form-template.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormTemplateEntity]),
  ],
  providers: [FormTemplateService, CreateFormTemplateHandler],
  controllers: [FormTemplateController],
})
export class FormTemplateModule {}