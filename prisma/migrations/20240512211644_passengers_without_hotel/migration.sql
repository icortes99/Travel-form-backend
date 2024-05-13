/*
  Warnings:

  - You are about to drop the column `suite_id` on the `passengers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[person_id,application_id]` on the table `passengers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "passengers_suite_id_person_id_application_id_key";

-- AlterTable
ALTER TABLE "passengers" DROP COLUMN "suite_id";

-- CreateIndex
CREATE UNIQUE INDEX "passengers_person_id_application_id_key" ON "passengers"("person_id", "application_id");
