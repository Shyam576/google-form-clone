import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormResponseAnswerDto } from './dtos/form-response-answer.dto.ts';

@Entity({ name: 'form-response-answers' })
@UseDto(FormResponseAnswerDto)
export class FormResponseAnswerEntity extends AbstractEntity<FormResponseAnswerDto> {
  @Column({ nullable: false })
  responseId!: string;

  @Column({ nullable: false })
  sectionId!: string;

  @Column({ nullable: false })
  fieldId!: string;

  @Column({ nullable: false })
  value!: string;
}
