
import { NotFoundException } from '@nestjs/common';

export class FormFieldNotFoundException extends NotFoundException {
  constructor() {
    super('FormField not found');
  }
}