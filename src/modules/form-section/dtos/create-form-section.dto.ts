import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFormSectionDto {
  @IsString()
  @IsNotEmpty()
  formTemplateId!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNumber()
  order!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;
}