
import { NotFoundException } from '@nestjs/common';

export class FormFieldConditionNotFoundException extends NotFoundException {
  constructor() {
    super('FormFieldCondition not found');
  }
}