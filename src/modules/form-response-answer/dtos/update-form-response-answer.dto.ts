import { IsOptional, IsString } from 'class-validator';

export class UpdateFormResponseAnswerDto {
  @IsString()
  @IsOptional()
  responseId?: string;

  @IsString()
  @IsOptional()
  sectionId?: string;

  @IsString()
  @IsOptional()
  fieldId?: string;

  @IsString()
  @IsOptional()
  value?: string;
}