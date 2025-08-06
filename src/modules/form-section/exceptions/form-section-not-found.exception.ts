
import { NotFoundException } from '@nestjs/common';

export class FormSectionNotFoundException extends NotFoundException {
  constructor() {
    super('FormSection not found');
  }
}