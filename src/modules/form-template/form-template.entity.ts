
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormTemplateDto} from './dtos/form-template.dto.ts';
import { FormSectionEntity } from '../form-section/form-section.entity.ts';
import type { Relation } from 'typeorm';

@Entity({ name: 'form_templates' })
@UseDto(FormTemplateDto)
export class FormTemplateEntity extends AbstractEntity<FormTemplateDto> {

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  description!: string;

  @Column({ name: 'is_active', nullable: false })
  isActive!: boolean;

  @OneToMany(() => FormSectionEntity, (section) => section.formTemplate)
  sections?: Relation<FormSectionEntity>[];
}