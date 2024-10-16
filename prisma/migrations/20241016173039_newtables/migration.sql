-- CreateTable
CREATE TABLE "Itenary" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Itenary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waypoints" (
    "id" SERIAL NOT NULL,
    "itenaryId" INTEGER NOT NULL,
    "wpTitle" TEXT NOT NULL,
    "wpDescription" TEXT NOT NULL,
    "wpDate" TEXT NOT NULL,
    "wpCost" INTEGER NOT NULL,

    CONSTRAINT "Waypoints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itenary" ADD CONSTRAINT "Itenary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waypoints" ADD CONSTRAINT "Waypoints_itenaryId_fkey" FOREIGN KEY ("itenaryId") REFERENCES "Itenary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
