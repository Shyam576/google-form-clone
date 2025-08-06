import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormResponseAnswerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  responseId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sectionId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fieldId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value!: string;
}