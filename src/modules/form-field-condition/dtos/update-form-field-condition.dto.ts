import { IsOptional, IsString } from 'class-validator';

export class UpdateFormFieldConditionDto {
  @IsString()
  @IsOptional()
  targetFieldId?: string;

  @IsString()
  @IsOptional()
  dependsOnId?: string;

  @IsString()
  @IsOptional()
  operator?: string;

  @IsString()
  @IsOptional()
  value?: string;
}