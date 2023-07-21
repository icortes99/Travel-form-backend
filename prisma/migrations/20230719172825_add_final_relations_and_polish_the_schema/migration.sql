/*
  Warnings:

  - Added the required column `attraction_id` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "person" DROP CONSTRAINT "person_application_id_fkey";

-- AlterTable
ALTER TABLE "application" ADD COLUMN     "attraction_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "attraction" ALTER COLUMN "image2" DROP NOT NULL,
ALTER COLUMN "image3" DROP NOT NULL;

-- AlterTable
ALTER TABLE "destination" ALTER COLUMN "image2" DROP NOT NULL,
ALTER COLUMN "image3" DROP NOT NULL,
ALTER COLUMN "video" DROP NOT NULL;

-- AlterTable
ALTER TABLE "person" ALTER COLUMN "application_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
