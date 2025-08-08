
import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormResponseDto} from './dtos/form-response.dto.ts';
import { FormResponseStatus } from '../../constants/form-response-status.ts';
import { FormTemplateEntity } from '../form-template/form-template.entity.ts';
import { FormResponseAnswerEntity } from '../form-response-answer/form-response-answer.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_responses' })
@UseDto(FormResponseDto)
export class FormResponseEntity extends AbstractEntity<FormResponseDto> {

  @Column({ name: 'form_template_id', nullable: false })
  formTemplateId!: string;

  @Column({ name: 'user_id', nullable: false })
  userId!: string;

  @Column({ name: 'submitted_at', nullable: true })
  submittedAt!: string;

  @Column({ nullable: false, enum: FormResponseStatus })
  status!: string;

  @ManyToOne(() => FormTemplateEntity)
  @JoinColumn({ name: 'form_template_id' })
  formTemplate?: Relation<FormTemplateEntity>;

  @OneToMany(() => FormResponseAnswerEntity, (answer) => answer.formResponse)
  answers?: Relation<FormResponseAnswerEntity>[];
}