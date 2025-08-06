import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { DataType } from '../../../constants/data-type.ts';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormFieldDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sectionId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  label!: string;

  @ApiProperty()
  @IsEnum(DataType)
  type!: string;

  @ApiProperty()
  @IsBoolean()
  isRequired!: boolean;

  @ApiProperty()
  @IsArray()
  options!: string[];

  @ApiProperty()
  @IsNumber()
  order!: number;
}
