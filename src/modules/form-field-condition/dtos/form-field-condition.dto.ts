
import { ApiProperty } from "@nestjs/swagger";
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { FormFieldConditionEntity } from '../form-field-condition.entity.ts';


export class FormFieldConditionDto extends AbstractDto {
  @ApiProperty()
  targetFieldId!: string;

  @ApiProperty()
  dependsOnFieldId!: string;

  @ApiProperty()
  operator!: string;

  @ApiProperty()
  value!: string;

  constructor(formFieldConditionEntity : FormFieldConditionEntity){
    super(formFieldConditionEntity)
    this.targetFieldId = formFieldConditionEntity.targetFieldId;
    this.dependsOnId = formFieldConditionEntity.dependsOnId;
    this.operator = formFieldConditionEntity.operator;
    this.value = formFieldConditionEntity.value;
  }
}