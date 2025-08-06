
import { NotFoundException } from '@nestjs/common';

export class FormTemplateNotFoundException extends NotFoundException {
  constructor() {
    super('FormTemplate not found');
  }
}