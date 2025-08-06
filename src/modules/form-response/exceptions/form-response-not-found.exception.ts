
import { NotFoundException } from '@nestjs/common';

export class FormResponseNotFoundException extends NotFoundException {
  constructor() {
    super('FormResponse not found');
  }
}