
import { NotFoundException } from '@nestjs/common';

export class FormResponseRepetableGroupNotFoundException extends NotFoundException {
  constructor() {
    super('FormResponseRepetableGroup not found');
  }
}