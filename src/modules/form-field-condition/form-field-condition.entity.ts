
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormFieldConditionDto} from './dtos/form-field-condition.dto.ts'

@Entity({ name: 'form-field-conditions' })
@UseDto(FormFieldConditionDto)
export class FormFieldConditionEntity extends AbstractEntity<FormFieldConditionDto> {

  @Column({ nullable: false })
  targetFieldId!: string;

  @Column({nullable: false})
  dependsOnId!: string;

  @Column({nullable: false})
  operator!:string;

  @Column({nullable: false})
  value!: string;
}