-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Messages_name_key" ON "Messages"("name");
