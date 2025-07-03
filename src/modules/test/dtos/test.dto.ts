
import { AbstractDto } from "../../../common/dto/abstract.dto.ts";
import { TestEntity } from '../test.entity.ts';


export class TestDto extends AbstractDto {
  name!: string;
}