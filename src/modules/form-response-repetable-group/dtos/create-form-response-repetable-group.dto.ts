import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateFormResponseRepetableGroupDto {
  @ApiProperty()
  @IsString()
  sectionId!: string;

  @ApiProperty()
  @IsString()
  responseId!: string;

  @ApiProperty()
  @IsString()
  repetableGroupId!:string;

  @ApiProperty()
  @IsNumber()
  groupIndex!:number
}