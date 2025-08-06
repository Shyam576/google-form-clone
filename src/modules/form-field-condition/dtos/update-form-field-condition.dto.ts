import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFormFieldConditionDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  targetFieldId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dependsOnFieldId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  operator?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  value?: string;
}