-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "person_id" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel_agency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "web_page" TEXT NOT NULL,
    "owner_id" INTEGER,
    "logo" TEXT NOT NULL,
    "main_color" TEXT NOT NULL,

    CONSTRAINT "Travel_agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "travel_agency_id" INTEGER,
    "distribution_id" INTEGER,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application_person" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "attraction_id" INTEGER,
    "transportation_id" INTEGER,

    CONSTRAINT "Application_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attraction" (
    "id" SERIAL NOT NULL,
    "destination_id" INTEGER,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "travel_duration" TEXT NOT NULL,
    "travel_distance" TEXT NOT NULL,

    CONSTRAINT "Attraction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transportation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "extra_detail1" TEXT NOT NULL,
    "extra_detail2" TEXT NOT NULL,
    "extra_detail3" TEXT NOT NULL,

    CONSTRAINT "Transportation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "attraction_id" INTEGER,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "min_people" INTEGER NOT NULL,
    "max_people" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "estimated_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Room_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distribution" (
    "id" SERIAL NOT NULL,
    "total_people" INTEGER NOT NULL,
    "total_kids" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,

    CONSTRAINT "Distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distribution_room" (
    "id" SERIAL NOT NULL,
    "room_type_id" INTEGER,
    "next_to" BOOLEAN NOT NULL,
    "distribution_id" INTEGER,

    CONSTRAINT "Distribution_room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel_agency" ADD CONSTRAINT "Travel_agency_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_travel_agency_id_fkey" FOREIGN KEY ("travel_agency_id") REFERENCES "Travel_agency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "Distribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application_person" ADD CONSTRAINT "Application_person_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application_person" ADD CONSTRAINT "Application_person_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "Attraction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application_person" ADD CONSTRAINT "Application_person_transportation_id_fkey" FOREIGN KEY ("transportation_id") REFERENCES "Transportation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attraction" ADD CONSTRAINT "Attraction_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "Attraction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distribution_room" ADD CONSTRAINT "Distribution_room_room_type_id_fkey" FOREIGN KEY ("room_type_id") REFERENCES "Room_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distribution_room" ADD CONSTRAINT "Distribution_room_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "Distribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
