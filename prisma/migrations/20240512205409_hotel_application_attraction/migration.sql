-- DropForeignKey
ALTER TABLE "passengers" DROP CONSTRAINT "passengers_suite_id_fkey";

-- AlterTable
ALTER TABLE "application_attraction" ADD COLUMN     "hotel_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "application_attraction" ADD CONSTRAINT "application_attraction_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
