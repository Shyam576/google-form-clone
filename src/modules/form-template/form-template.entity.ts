
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormTemplateDto} from './dtos/form-template.dto.ts'

@Entity({ name: 'form_templates' })
@UseDto(FormTemplateDto)
export class FormTemplateEntity extends AbstractEntity<FormTemplateDto> {

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: false })
  isActive!: boolean;
}