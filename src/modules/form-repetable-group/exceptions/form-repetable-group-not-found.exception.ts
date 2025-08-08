
import { NotFoundException } from '@nestjs/common';

export class FormRepetableGroupNotFoundException extends NotFoundException {
  constructor() {
    super('FormRepetableGroup not found');
  }
}