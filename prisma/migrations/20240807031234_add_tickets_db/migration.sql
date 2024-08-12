-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "attraction_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avg_price" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_uuid_key" ON "Ticket"("uuid");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_attraction_id_fkey" FOREIGN KEY ("attraction_id") REFERENCES "attraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
