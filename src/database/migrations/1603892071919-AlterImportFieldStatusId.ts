import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterImportFieldStatusId1603892071919
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropColumn('appointments', 'provider');
    // await queryRunner.addColumn(
    //   'appointments',
    //   new TableColumn({
    //     name: 'provider_id',
    //     type: 'uuid',
    //     isNullable: true,
    //   }),
    // );

    await queryRunner.createForeignKey(
      'import',
      new TableForeignKey({
        name: 'ImportStatus',
        columnNames: ['statusId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'status',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('import', 'ImportStatus');

    await queryRunner.dropColumn('import', 'statusId');

    await queryRunner.addColumn(
      'import',
      new TableColumn({
        name: 'statusId',
        type: 'number',
      }),
    );
  }
}
