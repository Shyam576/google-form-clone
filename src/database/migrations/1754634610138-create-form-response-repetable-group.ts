import { Table, type MigrationInterface, type QueryRunner } from 'typeorm';

export class CreateFormResponseRepetableGroup1754634610138
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'form_response_repetable_group',
        columns: [
          { name: 'id', type: 'varchar(36)', isPrimary: true },
          {
            name: 'response_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'section_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'repeatable_group_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'group_index',
            type: 'int',
            default: 0,
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
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('form_response_repetable_group')
  }
}
