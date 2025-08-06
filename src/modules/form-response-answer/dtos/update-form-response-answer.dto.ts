import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFormResponseAnswerDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  responseId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  sectionId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  fieldId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  value?: string;
}