import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FormResponseStatus } from '../../../constants/data-type copy.ts';

export class UpdateFormResponseDto {
  @IsString()
  @IsOptional()
  formTemplateId?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  submittedAt?: string;

  @IsEnum(FormResponseStatus)
  @IsOptional()
  status?: string;
}