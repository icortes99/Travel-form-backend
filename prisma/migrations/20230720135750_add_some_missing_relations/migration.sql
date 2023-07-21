/*
  Warnings:

  - Added the required column `travel_agency_id` to the `destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "destination" ADD COLUMN     "travel_agency_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "destination" ADD CONSTRAINT "destination_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "travel_agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
