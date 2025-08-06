import { Table, type MigrationInterface, type QueryRunner } from 'typeorm';

export class CreateFormFieldsTable1754463618937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'form_fields',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'section_id',
            type: 'varchar(36)',
            isNullable: true,
          },
          {
            name: 'label',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['text', 'dropdown', 'multiselect'],
          },
          {
            name: 'is_required',
            type: 'boolean',
            default: false,
          },
          {
            name: 'options',
            type: 'json',
            default: null,
          },
          {
            name: 'order',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            precision: 6,
            default: 'CURRENT_TIMESTAMP(6)',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            precision: 6,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
    ),
      true;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('form_fields');
  }
}
