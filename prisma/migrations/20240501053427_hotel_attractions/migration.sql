/*
  Warnings:

  - You are about to drop the `hotel_destination` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hotel_destination" DROP CONSTRAINT "hotel_destination_destination_id_fkey";

-- DropForeignKey
ALTER TABLE "hotel_destination" DROP CONSTRAINT "hotel_destination_hotel_id_fkey";

-- DropForeignKey
ALTER TABLE "hotel_destination" DROP CONSTRAINT "hotel_destination_travel_agency_id_fkey";

-- AlterTable
ALTER TABLE "travel_agency" ADD COLUMN     "notion_db" TEXT;

-- DropTable
DROP TABLE "hotel_destination";

-- CreateTable
CREATE TABLE "hotel_attraction" (
    "hotel_id" INTEGER NOT NULL,
    "attraction_id" INTEGER NOT NULL,
    "travel_agency_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "hotel_attraction_hotel_id_attraction_id_travel_agency_id_key" ON "hotel_attraction"("hotel_id", "attraction_id", "travel_agency_id");

-- AddForeignKey
ALTER TABLE "hotel_attraction" ADD CONSTRAINT "hotel_attraction_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_attraction" ADD CONSTRAINT "hotel_attraction_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_attraction" ADD CONSTRAINT "hotel_attraction_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "travel_agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
