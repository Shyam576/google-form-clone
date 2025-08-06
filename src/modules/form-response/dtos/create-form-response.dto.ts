import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { FormResponseStatus } from '../../../constants/data-type copy.ts';

export class CreateFormResponseDto {
  @IsString()
  @IsNotEmpty()
  formTemplateId!: string;

  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  submittedAt!: string;

  @IsEnum(FormResponseStatus)
  status!: string;
}