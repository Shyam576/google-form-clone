
import { Column, Entity, JoinColumn, ManyToOne, type Relation } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormRepetableGroupDto} from './dtos/form-repetable-group.dto.ts'
import { FormSectionEntity } from '../../modules/form-section/form-section.entity.ts';

@Entity({ name: 'form-repetable-groups' })
@UseDto(FormRepetableGroupDto)
export class FormRepetableGroupEntity extends AbstractEntity<FormRepetableGroupDto> {

  @Column({ nullable: false })
  sectionId!: string;

  @Column({ nullable: false })
  title!: string;


  @ManyToOne(() => FormSectionEntity, (section) => section.repetableGroup)
  @JoinColumn({ name: 'response_id' })
  section!: Relation<FormSectionEntity>;
}