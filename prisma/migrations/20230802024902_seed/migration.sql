-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('INSTAGRAM', 'FACEBOOK', 'REFERRAL', 'WEBSITE', 'OTHER');

-- CreateEnum
CREATE TYPE "TripObjective" AS ENUM ('VACATION', 'FAMILY', 'COUPLE', 'SOLO', 'FRIENDS', 'ADVENTURE', 'RELAXATION', 'CULTURAL_EXPLORATION', 'FOOD_AND_CULINARY', 'BEACH_AND_SUN', 'WILDLIFE_AND_NATURE', 'SPORTS_AND_RECREATION', 'HONEYMOON', 'OTHER');

-- CreateEnum
CREATE TYPE "ContactPreference" AS ENUM ('CALL', 'VIDEO_CALL', 'EMAIL', 'SMS', 'WHATSAPP', 'OTHER');

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
    "user_id" INTEGER,
    "travel_agency_id" INTEGER NOT NULL,
    "destination_id" INTEGER NOT NULL,
    "lead_source" "LeadSource" NOT NULL,
    "user_current_location" TEXT NOT NULL,
    "has_entry_permission" BOOLEAN NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "trip_objective" "TripObjective" NOT NULL,
    "contact_preference" "ContactPreference" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destination" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "video" TEXT,
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
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "travel_duration" DOUBLE PRECISION NOT NULL,
    "travel_distance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel_destination" (
    "hotel_id" INTEGER NOT NULL,
    "destination_id" INTEGER NOT NULL,
    "travel_agency_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "suite" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "hotel_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "fee_per_adult" DOUBLE PRECISION NOT NULL,
    "fee_per_kid" DOUBLE PRECISION NOT NULL,
    "based_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "suite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passengers" (
    "suite_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "application_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "application_attraction" (
    "application_id" INTEGER NOT NULL,
    "attraction_id" INTEGER NOT NULL
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
CREATE UNIQUE INDEX "destination_uuid_key" ON "destination"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "attraction_uuid_key" ON "attraction"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_uuid_key" ON "hotel"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_destination_hotel_id_destination_id_travel_agency_id_key" ON "hotel_destination"("hotel_id", "destination_id", "travel_agency_id");

-- CreateIndex
CREATE UNIQUE INDEX "suite_uuid_key" ON "suite"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "passengers_suite_id_person_id_application_id_key" ON "passengers"("suite_id", "person_id", "application_id");

-- CreateIndex
CREATE UNIQUE INDEX "application_attraction_application_id_attraction_id_key" ON "application_attraction"("application_id", "attraction_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "travel_agency" ADD CONSTRAINT "travel_agency_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "travel_agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attraction" ADD CONSTRAINT "attraction_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_destination" ADD CONSTRAINT "hotel_destination_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_destination" ADD CONSTRAINT "hotel_destination_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotel_destination" ADD CONSTRAINT "hotel_destination_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "travel_agency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suite" ADD CONSTRAINT "suite_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_suite_id_fkey" FOREIGN KEY ("suite_id") REFERENCES "suite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passengers" ADD CONSTRAINT "passengers_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_attraction" ADD CONSTRAINT "application_attraction_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_attraction" ADD CONSTRAINT "application_attraction_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
