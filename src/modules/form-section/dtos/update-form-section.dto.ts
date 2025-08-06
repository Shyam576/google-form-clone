import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFormSectionDto {
  @IsString()
  @IsOptional()
  formTemplateId?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsString()
  @IsOptional()
  description?: string;
}