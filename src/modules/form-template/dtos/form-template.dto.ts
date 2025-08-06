import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto.ts';
import { FormTemplateEntity } from '../form-template.entity.ts';

export class FormTemplateDto extends AbstractDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  descrption!: string;

  @ApiProperty()
  isActive!: boolean;

  constructor(formTemplateEntity : FormTemplateEntity){
    super(formTemplateEntity)
    this.name = formTemplateEntity.name;
    this.descrption = formTemplateEntity.description;
    this.isActive = formTemplateEntity.isActive;
  }
}
