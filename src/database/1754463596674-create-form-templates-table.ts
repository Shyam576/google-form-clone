import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateFormTemplatesTable1754463596674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'form_templates',
                columns:[
                    {
                        name: 'id',
                        type: 'varchar(36)',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar(100)',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar(255)',
                        isNullable: false
                    },
                    {
                        name: 'is_active',
                        type: 'boolean',
                        default: true
                    }
                ],
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('form_templates')
    }

}
