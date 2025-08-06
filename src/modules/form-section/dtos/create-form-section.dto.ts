import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFormSectionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  formTemplateId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty()
  @IsNumber()
  order!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description!: string;
}
