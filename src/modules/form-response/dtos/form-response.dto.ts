import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto.ts';
import { FormResponseEntity } from '../form-response.entity.ts';
import { FormResponseStatus } from '../../../constants/data-type copy.ts';

export class FormResponseDto extends AbstractDto {
  @ApiProperty()
  formTemplateId!: string;

  @ApiProperty()
  userId!: string;

  @ApiProperty()
  submittedAt!: string;

  @ApiProperty({ enum: FormResponseStatus })
  status!: string;

  constructor(formResponseEntity: FormResponseEntity){
    super(formResponseEntity)
    this.formTemplateId = formResponseEntity.formTemplateId;
    this.userId = formResponseEntity.userId;
    this.submittedAt = formResponseEntity.submittedAt;
    this.status = formResponseEntity.status;
  }
}
