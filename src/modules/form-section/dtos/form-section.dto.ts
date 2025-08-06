
import { ApiProperty } from "@nestjs/swagger";
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { FormSectionEntity } from '../form-section.entity.ts';


export class FormSectionDto extends AbstractDto {

   @ApiProperty()
  formTemplateId!: string;

  @ApiProperty()
  title!: string;

   @ApiProperty()
  order!: number;

   @ApiProperty()
  description!: string;

  constructor(formSectionEntity: FormSectionEntity){
    super(formSectionEntity)
    this.formTemplateId = formSectionEntity.formTemplateId;
    this.title = formSectionEntity.title;
    this.order = formSectionEntity.order;
    this.description = formSectionEntity.description;
  }
}