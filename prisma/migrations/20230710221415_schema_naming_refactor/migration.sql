/*
  Warnings:

  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Application_person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Attraction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Destination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Distribution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Distribution_room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transportation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Travel_agency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_distribution_id_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_travel_agency_id_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Application_person" DROP CONSTRAINT "Application_person_attraction_id_fkey";

-- DropForeignKey
ALTER TABLE "Application_person" DROP CONSTRAINT "Application_person_transportation_id_fkey";

-- DropForeignKey
ALTER TABLE "Application_person" DROP CONSTRAINT "Application_person_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Attraction" DROP CONSTRAINT "Attraction_destination_id_fkey";

-- DropForeignKey
ALTER TABLE "Distribution_room" DROP CONSTRAINT "Distribution_room_distribution_id_fkey";

-- DropForeignKey
ALTER TABLE "Distribution_room" DROP CONSTRAINT "Distribution_room_room_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_attraction_id_fkey";

-- DropForeignKey
ALTER TABLE "Travel_agency" DROP CONSTRAINT "Travel_agency_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_person_id_fkey";

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "Application_person";

-- DropTable
DROP TABLE "Attraction";

-- DropTable
DROP TABLE "Destination";

-- DropTable
DROP TABLE "Distribution";

-- DropTable
DROP TABLE "Distribution_room";

-- DropTable
DROP TABLE "Hotel";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Room_type";

-- DropTable
DROP TABLE "Transportation";

-- DropTable
DROP TABLE "Travel_agency";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travel_agency" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "travel_agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "travel_agency_id" INTEGER NOT NULL,
    "distribution_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application_person" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "attraction_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destination" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attraction" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "destination_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "travel_duration" TEXT NOT NULL,
    "travel_distance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "attraction_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_uuid_key" ON "person"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_uuid_key" ON "user"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_person_id_key" ON "user"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "travel_agency_uuid_key" ON "travel_agency"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "application_uuid_key" ON "application"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "application_person_uuid_key" ON "application_person"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "destination_uuid_key" ON "destination"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "attraction_uuid_key" ON "attraction"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_uuid_key" ON "hotel"("uuid");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_agency" ADD CONSTRAINT "travel_agency_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "travel_agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_person" ADD CONSTRAINT "application_person_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_person" ADD CONSTRAINT "application_person_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attraction" ADD CONSTRAINT "attraction_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel" ADD CONSTRAINT "hotel_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
