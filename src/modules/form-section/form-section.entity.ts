
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormSectionDto} from './dtos/form-section.dto.ts'

@Entity({ name: 'form-sections' })
@UseDto(FormSectionDto)
export class FormSectionEntity extends AbstractEntity<FormSectionDto> {

   @Column({ nullable: false })
  formTemplateId!: string;

  @Column({ nullable: false })
  title!: string;

  @Column({nullable:false })
  order!: number;

  @Column({nullable: false})
  description!: string;
}