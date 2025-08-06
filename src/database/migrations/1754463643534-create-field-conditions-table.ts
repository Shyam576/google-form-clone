import { Table, type MigrationInterface, type QueryRunner } from 'typeorm';

export class CreateFieldConditionsTable1754463643534
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'form_field_condtions',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'target_field_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'depends_on_field_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'operator',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'varchar(100)',
            isNullable: false,
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
    await queryRunner.dropTable('form_field_conditions')
  }
}
