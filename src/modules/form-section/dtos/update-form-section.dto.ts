import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFormSectionDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  formTemplateId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  order?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;
}