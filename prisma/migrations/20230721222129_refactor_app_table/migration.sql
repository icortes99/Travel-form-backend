/*
  Warnings:

  - You are about to drop the column `attraction_id` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `image1` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `image2` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `image3` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `attraction` table. All the data in the column will be lost.
  - You are about to drop the column `image1` on the `destination` table. All the data in the column will be lost.
  - You are about to drop the column `image2` on the `destination` table. All the data in the column will be lost.
  - You are about to drop the column `image3` on the `destination` table. All the data in the column will be lost.
  - You are about to drop the column `attraction_id` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `hotel` table. All the data in the column will be lost.
  - Added the required column `destination_id` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_attraction_id_fkey";

-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_user_id_fkey";

-- DropForeignKey
ALTER TABLE "hotel" DROP CONSTRAINT "hotel_attraction_id_fkey";

-- AlterTable
ALTER TABLE "application" DROP COLUMN "attraction_id",
ADD COLUMN     "destination_id" INTEGER NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "attraction" DROP COLUMN "image1",
DROP COLUMN "image2",
DROP COLUMN "image3",
DROP COLUMN "location",
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "destination" DROP COLUMN "image1",
DROP COLUMN "image2",
DROP COLUMN "image3",
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "hotel" DROP COLUMN "attraction_id",
DROP COLUMN "image",
DROP COLUMN "location",
ADD COLUMN     "images" TEXT[];

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
