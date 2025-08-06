
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormResponseDto} from './dtos/form-response.dto.ts'
import { FormResponseStatus } from '../../constants/data-type copy.ts';

@Entity({ name: 'form-responses' })
@UseDto(FormResponseDto)
export class FormResponseEntity extends AbstractEntity<FormResponseDto> {

  @Column({ nullable: false })
  formTemplateId!: string;

  @Column({ nullable: false })
  userId!: string;

  @Column({ nullable: false })
  submittedAt!: string;

  @Column({ nullable: false, enum: FormResponseStatus })
  status!: string;
}