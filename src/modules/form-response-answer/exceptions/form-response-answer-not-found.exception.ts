
import { NotFoundException } from '@nestjs/common';

export class FormResponseAnswerNotFoundException extends NotFoundException {
  constructor() {
    super('FormResponseAnswer not found');
  }
}