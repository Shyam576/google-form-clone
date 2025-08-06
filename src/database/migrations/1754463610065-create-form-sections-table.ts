import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateFormSectionsTable1754463610065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'form_sections',
                columns:[
                    {
                        name: 'id',
                        type: 'varchar(36)',
                        isPrimary: true
                    },
                    {
                        name: 'form_template_id',
                        type: 'varchar(36)',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'order',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar(255)',
                        isNullable: true
                    },
                     {
                        name: 'created_at',
                        type: 'timestamp',
                        precision: 6,
                        default: 'CURRENT_TIMESTAMP(6)'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        precision: 6,
                        default: 'CURRENT_TIMESTAMP(6)'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('form_sections')
    }

}
