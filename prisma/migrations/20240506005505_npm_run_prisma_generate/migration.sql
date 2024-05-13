/*
  Warnings:

  - You are about to drop the `hotel_attraction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `attraction_id` to the `hotel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hotel_attraction" DROP CONSTRAINT "hotel_attraction_attraction_id_fkey";

-- DropForeignKey
ALTER TABLE "hotel_attraction" DROP CONSTRAINT "hotel_attraction_hotel_id_fkey";

-- AlterTable
ALTER TABLE "hotel" ADD COLUMN     "attraction_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "hotel_attraction";

-- AddForeignKey
ALTER TABLE "hotel" ADD CONSTRAINT "hotel_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
