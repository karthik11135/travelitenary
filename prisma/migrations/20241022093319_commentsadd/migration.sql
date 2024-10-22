-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "commentText" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "waypointId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_waypointId_fkey" FOREIGN KEY ("waypointId") REFERENCES "Waypoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
