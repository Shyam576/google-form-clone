import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DataType } from '../../../constants/data-type.ts';

export class CreateFormFieldDto {
  @IsString()
  @IsNotEmpty()
  sectionId!: string;

  @IsString()
  @IsNotEmpty()
  label!: string;

  @IsEnum(DataType)
  type!: string;

  @IsBoolean()
  isRequired!: boolean;

  @IsArray()
  options!: string[];

  @IsNumber()
  order!: number;
}