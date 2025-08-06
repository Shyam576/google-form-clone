import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DataType } from '../../../constants/data-type.ts';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFormFieldDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  sectionId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  label?: string;

  @ApiProperty()
  @IsEnum(DataType)
  @IsOptional()
  type?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isRequired?: boolean;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  options?: string[];

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  order?: number;
}