
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { TestDto} from './dtos/test.dto.ts'

@Entity({ name: 'tests' })
@UseDto(TestDto)
export class TestEntity extends AbstractEntity<TestDto> {

  @Column({ nullable: false })
  name!: string;
}