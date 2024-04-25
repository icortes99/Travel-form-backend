/*
  Warnings:

  - Added the required column `room_assigned` to the `passengers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "passengers" ADD COLUMN     "room_assigned" INTEGER NOT NULL;
