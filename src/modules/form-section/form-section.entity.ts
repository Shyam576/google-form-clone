
import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormSectionDto} from './dtos/form-section.dto.ts';
import { FormTemplateEntity } from '../form-template/form-template.entity.ts';
import { FormFieldEntity } from '../form-field/form-field.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_sections' })
@UseDto(FormSectionDto)
export class FormSectionEntity extends AbstractEntity<FormSectionDto> {

   @Column({ name: 'form_template_id', nullable: false })
  formTemplateId!: string;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: true })
  order!: number;

  @Column({ nullable: true })
  description!: string;

  @ManyToOne(() => FormTemplateEntity, (template) => template.sections)
  @JoinColumn({ name: 'form_template_id' })
  formTemplate?: Relation<FormTemplateEntity>;

  @OneToMany(() => FormFieldEntity, (field) => field.section)
  fields?: Relation<FormFieldEntity>[];
}