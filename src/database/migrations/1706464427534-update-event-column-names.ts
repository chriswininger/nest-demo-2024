import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateEventColumnNames1706464427534 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "events" RENAME COLUMN "createdAt" TO "created_at"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "events" RENAME COLUMN "created_at" TO "createdAt"`,
    );
  }
}
