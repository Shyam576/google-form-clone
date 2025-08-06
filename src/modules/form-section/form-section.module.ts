
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormSectionHandler } from './commands/create-form-section.command.ts';
import { FormSectionController } from './form-section.controller.ts';
import { FormSectionEntity } from './form-section.entity.ts';
import { FormSectionService } from './form-section.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormSectionEntity]),
  ],
  providers: [FormSectionService, CreateFormSectionHandler],
  controllers: [FormSectionController],
})
export class FormSectionModule {}