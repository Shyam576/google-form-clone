
import { NotFoundException } from '@nestjs/common';

export class TestNotFoundException extends NotFoundException {
  constructor() {
    super('Test not found');
  }
}