import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormResponseAnswerDto {
  @IsString()
  @IsNotEmpty()
  responseId!: string;

  @IsString()
  @IsNotEmpty()
  sectionId!: string;

  @IsString()
  @IsNotEmpty()
  fieldId!: string;

  @IsString()
  @IsNotEmpty()
  value!: string;
}