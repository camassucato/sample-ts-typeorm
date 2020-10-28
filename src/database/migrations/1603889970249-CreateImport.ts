import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateImport1603889970249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'import',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'userId',
            type: 'number',
          },
          {
            name: 'statusId',
            type: 'number',
          },
          {
            name: 'filename',
            type: 'varchar',
          },
          {
            name: 'hash',
            type: 'varchar',
          },
          {
            name: 'importDate',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'origin',
            type: 'varchar',
          },
          {
            name: 'target',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted',
            type: 'number',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}
