import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormResponseAnswerDto } from './dtos/form-response-answer.dto.ts';
import { FormResponseEntity } from '../form-response/form-response.entity.ts';
import { FormSectionEntity } from '../form-section/form-section.entity.ts';
import { FormFieldEntity } from '../form-field/form-field.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_response_answers' })
@UseDto(FormResponseAnswerDto)
export class FormResponseAnswerEntity extends AbstractEntity<FormResponseAnswerDto> {
  @Column({ name: 'response_id', nullable: false })
  responseId!: string;

  @Column({ name: 'section_id', nullable: false })
  sectionId!: string;

  @Column({ name: 'field_id', nullable: false })
  fieldId!: string;

  @Column({ nullable: false })
  value!: string;

  @ManyToOne(() => FormResponseEntity, (response) => response.answers)
  @JoinColumn({ name: 'response_id' })
  formResponse?: Relation<FormResponseEntity>;

  @ManyToOne(() => FormSectionEntity)
  @JoinColumn({ name: 'section_id' })
  section?: Relation<FormSectionEntity>;

  @ManyToOne(() => FormFieldEntity)
  @JoinColumn({ name: 'field_id' })
  field?: Relation<FormFieldEntity>;
}
