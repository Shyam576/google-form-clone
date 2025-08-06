
import { ApiProperty } from "@nestjs/swagger";
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { FormResponseAnswerEntity } from '../form-response-answer.entity.ts';


export class FormResponseAnswerDto extends AbstractDto {

  @ApiProperty()
  responseId!: string;

  @ApiProperty()
  fieldId!: string;

  @ApiProperty()
  sectionId!: string;

  @ApiProperty()
  value!: string;

  constructor(formResponseAnwserEntity: FormResponseAnswerEntity){
    super(formResponseAnwserEntity)
    this.responseId = formResponseAnwserEntity.responseId;
    this.fieldId = formResponseAnwserEntity.fieldId;
    this.sectionId = formResponseAnwserEntity.sectionId;
    this.value = formResponseAnwserEntity.value;
  }
}