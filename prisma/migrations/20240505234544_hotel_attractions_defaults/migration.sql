/*
  Warnings:

  - You are about to drop the column `travel_agency_id` on the `hotel_attraction` table. All the data in the column will be lost.
  - You are about to drop the `suite` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[hotel_id,attraction_id]` on the table `hotel_attraction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "hotel_attraction" DROP CONSTRAINT "hotel_attraction_travel_agency_id_fkey";

-- DropForeignKey
ALTER TABLE "passengers" DROP CONSTRAINT "passengers_suite_id_fkey";

-- DropForeignKey
ALTER TABLE "suite" DROP CONSTRAINT "suite_hotel_id_fkey";

-- DropIndex
DROP INDEX "hotel_attraction_hotel_id_attraction_id_travel_agency_id_key";

-- AlterTable
ALTER TABLE "hotel" ADD COLUMN     "roomTypes" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "hotel_attraction" DROP COLUMN "travel_agency_id";

-- DropTable
DROP TABLE "suite";

-- CreateIndex
CREATE UNIQUE INDEX "hotel_attraction_hotel_id_attraction_id_key" ON "hotel_attraction"("hotel_id", "attraction_id");

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_suite_id_fkey" FOREIGN KEY ("suite_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
