import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormFieldConditionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  targetFieldId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dependsOnFieldId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  operator!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value!: string;
}