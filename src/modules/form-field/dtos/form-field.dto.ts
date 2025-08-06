
import { ApiProperty } from "@nestjs/swagger";
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { FormFieldEntity } from '../form-field.entity.ts';
import { DataType } from "../../../constants/data-type.ts";


export class FormFieldDto extends AbstractDto {

   @ApiProperty()
  sectionId!: string;

  @ApiProperty()
  label!: string;

  @ApiProperty({enum: DataType})
  type!: string; 

  @ApiProperty()
  isRequired!: boolean;

  @ApiProperty()
  options!: string;

  @ApiProperty()
  order!: number;

  constructor(formFieldEntity : FormFieldEntity){
    super(formFieldEntity)
    this.sectionId = formFieldEntity.sectionId;
    this.label = formFieldEntity.label;
    this.type = formFieldEntity.type;
    this.isRequired = formFieldEntity.isRequired;
    this.options = formFieldEntity.options;
    this.order = formFieldEntity.order;
  }
}