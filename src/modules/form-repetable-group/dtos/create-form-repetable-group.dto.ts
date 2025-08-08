import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFormRepetableGroupDto {

  @ApiProperty()
  @IsString()
  sectionId!:string;
  
  @ApiProperty()
  @IsString()
  title!: string;
}