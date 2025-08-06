import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormFieldDto } from './dtos/form-field.dto.ts';
import { DataType } from '../../constants/data-type.ts';
import { FormSectionEntity } from '../form-section/form-section.entity.ts';
import { FormFieldConditionEntity } from '../form-field-condition/form-field-condition.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_fields' })
@UseDto(FormFieldDto)
export class FormFieldEntity extends AbstractEntity<FormFieldDto> {
  @Column({ name: 'section_id', nullable: true })
  sectionId!: string;

  @Column({ nullable: false })
  label!: string;

  @Column({ nullable: false, enum: DataType })
  type!: string;

  @Column({ name: 'is_required', nullable: false })
  isRequired!: boolean;

  @Column({ nullable: true, type: 'json' })
  options!: string[];

  @Column({ nullable: true })
  order!: number;

  @ManyToOne(() => FormSectionEntity, (section) => section.fields)
  @JoinColumn({ name: 'section_id' })
  section?: Relation<FormSectionEntity>;

  @OneToMany(() => FormFieldConditionEntity, (condition) => condition.targetField)
  conditions?: Relation<FormFieldConditionEntity>[];
}
