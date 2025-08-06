
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormFieldConditionDto} from './dtos/form-field-condition.dto.ts';
import { FormFieldEntity } from '../form-field/form-field.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_field_condtions' })
@UseDto(FormFieldConditionDto)
export class FormFieldConditionEntity extends AbstractEntity<FormFieldConditionDto> {

  @Column({ name: 'target_field_id', nullable: false })
  targetFieldId!: string;

  @Column({ name: 'depends_on_field_id', nullable: false })
  dependsOnFieldId!: string;

  @Column({ nullable: false })
  operator!:string;

  @Column({ nullable: false })
  value!: string;

  @ManyToOne(() => FormFieldEntity, (field) => field.conditions)
  @JoinColumn({ name: 'target_field_id' })
  targetField?: Relation<FormFieldEntity>;

  @ManyToOne(() => FormFieldEntity)
  @JoinColumn({ name: 'depends_on_field_id' })
  dependsOnField?: Relation<FormFieldEntity>;
}