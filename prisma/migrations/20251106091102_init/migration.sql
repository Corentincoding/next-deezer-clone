-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "cover" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
