import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormFieldDto } from './dtos/form-field.dto.ts';
import { DataType } from '../../constants/data-type.ts';

@Entity({ name: 'form-fields' })
@UseDto(FormFieldDto)
export class FormFieldEntity extends AbstractEntity<FormFieldDto> {
  @Column({ nullable: false })
  sectionId!: string;

  @Column({ nullable: false })
  label!: string;

  @Column({ nullable: false,enum: DataType })
  type!: string;

  @Column({ nullable: false })
  isRequired!: boolean;

  @Column({ nullable: false,  type: 'json'})
  options!: string[];

  @Column({ nullable: false })
  order!: number;
}
