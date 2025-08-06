import { Table, type MigrationInterface, type QueryRunner } from 'typeorm';

export class CreateFormResponseAnswersTable1754463666871
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'form_response_answers',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
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
            name: 'field_id',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'varchar(255)',
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
    await queryRunner.dropTable('form_response_answers')
  }
}
