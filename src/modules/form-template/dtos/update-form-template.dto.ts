import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateFormTemplateDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}