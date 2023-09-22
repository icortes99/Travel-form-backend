/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `travel_agency` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `travel_agency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "travel_agency" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "travel_agency_slug_key" ON "travel_agency"("slug");
