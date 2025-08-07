import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { FormResponseStatus } from '../../../constants/data-type copy.ts';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFormResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  formTemplateId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @ApiPropertyOptional()
  // @IsString()
  submittedAt!: string;

  @ApiProperty()
  @IsEnum(FormResponseStatus)
  status!: string;
}