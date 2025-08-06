import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFormTemplateDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  isActive!: boolean;
}