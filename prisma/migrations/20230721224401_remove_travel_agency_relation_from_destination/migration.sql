/*
  Warnings:

  - You are about to drop the column `travel_agency_id` on the `destination` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "destination" DROP CONSTRAINT "destination_travel_agency_id_fkey";

-- AlterTable
ALTER TABLE "destination" DROP COLUMN "travel_agency_id";
