import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FormResponseStatus } from '../../../constants/form-response-status.ts';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFormResponseDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  formTemplateId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  submittedAt?: string;

  @ApiProperty()
  @IsEnum(FormResponseStatus)
  @IsOptional()
  status?: string;
}