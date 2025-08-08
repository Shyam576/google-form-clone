
import { ApiProperty } from "@nestjs/swagger";
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { FormRepetableGroupEntity } from '../form-repetable-group.entity.ts';


export class FormRepetableGroupDto extends AbstractDto {

  @ApiProperty()
  sectionId!:string;

  @ApiProperty()
  title!:string

  constructor(entity:FormRepetableGroupEntity){
    super(entity)
    this.sectionId = this.sectionId;
    this.title = this.title;
  }
}