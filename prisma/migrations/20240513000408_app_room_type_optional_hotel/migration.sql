/*
  Warnings:

  - You are about to drop the column `roomTypes` on the `hotel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "application_attraction" DROP CONSTRAINT "application_attraction_hotel_id_fkey";

-- AlterTable
ALTER TABLE "application_attraction" ADD COLUMN     "selected_room_type" TEXT,
ALTER COLUMN "hotel_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "hotel" DROP COLUMN "roomTypes",
ADD COLUMN     "room_types" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AddForeignKey
ALTER TABLE "application_attraction" ADD CONSTRAINT "application_attraction_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
