import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormFieldConditionDto {
  @IsString()
  @IsNotEmpty()
  targetFieldId!: string;

  @IsString()
  @IsNotEmpty()
  dependsOnId!: string;

  @IsString()
  @IsNotEmpty()
  operator!: string;

  @IsString()
  @IsNotEmpty()
  value!: string;
}