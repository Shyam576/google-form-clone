import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DataType } from '../../../constants/data-type.ts';

export class UpdateFormFieldDto {
  @IsString()
  @IsOptional()
  sectionId?: string;

  @IsString()
  @IsOptional()
  label?: string;

  @IsEnum(DataType)
  @IsOptional()
  type?: string;

  @IsBoolean()
  @IsOptional()
  isRequired?: boolean;

  @IsArray()
  @IsOptional()
  options?: string[];

  @IsNumber()
  @IsOptional()
  order?: number;
}