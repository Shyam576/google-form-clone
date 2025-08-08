
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateFormRepetableGroupHandler } from './commands/create-form-repetable-group.command.ts';
import { FormRepetableGroupController } from './form-repetable-group.controller.ts';
import { FormRepetableGroupEntity } from './form-repetable-group.entity.ts';
import { FormRepetableGroupService } from './form-repetable-group.service.ts';


@Module({
  imports: [
    TypeOrmModule.forFeature([FormRepetableGroupEntity]),
  ],
  providers: [FormRepetableGroupService, CreateFormRepetableGroupHandler],
  controllers: [FormRepetableGroupController],
})
export class FormRepetableGroupModule {}