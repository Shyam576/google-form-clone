import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { FormResponseRepetableGroupDto } from './dtos/form-response-repetable-group.dto.ts';


@Entity({ name: 'form-response-repetable-groups' })
@UseDto(FormResponseRepetableGroupDto)
export class FormResponseRepetableGroupEntity extends AbstractEntity<FormResponseRepetableGroupDto> {
  @Column({ nullable: false })
  responseId!: string;

  @Column({ nullable: false })
  sectionId!: string;

  @Column({ nullable: false })
  repetableGroupId!: string;

  @Column({ nullable: false })
  groupIndex!: number;

}
