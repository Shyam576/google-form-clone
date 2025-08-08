import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto.ts';
import { FormResponseRepetableGroupEntity } from '../form-response-repetable-group.entity.ts';


export class FormResponseRepetableGroupDto extends AbstractDto {
  @ApiProperty()
  responseId!: string;

  @ApiProperty()
  sectionId!: string;

  @ApiProperty()
  repetableGroupId!: string;

  @ApiProperty()
  groupIndex!: number;



  constructor(entity: FormResponseRepetableGroupEntity){
    super(entity)
    this.responseId = entity.responseId;
    this.sectionId = entity.sectionId;
    this.repetableGroupId = entity.repetableGroupId;
    this.groupIndex = entity.groupIndex;
  }
}
