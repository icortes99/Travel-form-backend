/*
  Warnings:

  - You are about to drop the `application_person` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `attraction` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `travel_duration` on the `attraction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `travel_distance` on the `attraction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `description` to the `destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `application_id` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "application_person" DROP CONSTRAINT "application_person_attraction_id_fkey";

-- DropForeignKey
ALTER TABLE "application_person" DROP CONSTRAINT "application_person_user_id_fkey";

-- AlterTable
ALTER TABLE "attraction" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "travel_duration",
ADD COLUMN     "travel_duration" DOUBLE PRECISION NOT NULL,
DROP COLUMN "travel_distance",
ADD COLUMN     "travel_distance" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "destination" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hotel" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "application_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "application_person";

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
