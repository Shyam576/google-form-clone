
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormResponseRepetableGroupHandler } from './commands/create-form-response-repetable-group.command.ts';
import { FormResponseRepetableGroupController } from './form-response-repetable-group.controller.ts';
import { FormResponseRepetableGroupEntity } from './form-response-repetable-group.entity.ts';
import { FormResponseRepetableGroupService } from './form-response-repetable-group.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormResponseRepetableGroupEntity]),
  ],
  providers: [FormResponseRepetableGroupService, CreateFormResponseRepetableGroupHandler],
  controllers: [FormResponseRepetableGroupController],
})
export class FormResponseRepetableGroupModule {}