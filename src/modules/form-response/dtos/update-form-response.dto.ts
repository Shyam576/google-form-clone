import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FormResponseStatus } from '../../../constants/data-type copy.ts';
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