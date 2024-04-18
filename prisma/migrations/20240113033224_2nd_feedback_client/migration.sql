/*
  Warnings:

  - You are about to drop the column `travel_distance` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `travel_duration` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `birthdate` on the `person` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `application_attraction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end_date` to the `application_attraction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `application_attraction` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `application_attraction` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `age` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "application_attraction_application_id_attraction_id_key";

-- AlterTable
ALTER TABLE "application_attraction" ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "application_attraction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "attraction" DROP COLUMN "travel_distance",
DROP COLUMN "travel_duration";

-- AlterTable
ALTER TABLE "person" DROP COLUMN "birthdate",
ADD COLUMN     "age" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "application_attraction_uuid_key" ON "application_attraction"("uuid");
