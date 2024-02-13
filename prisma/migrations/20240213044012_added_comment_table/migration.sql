-- CreateTable
CREATE TABLE "Commnet" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER,
    "commentId" INTEGER,

    CONSTRAINT "Commnet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commnet" ADD CONSTRAINT "Commnet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commnet" ADD CONSTRAINT "Commnet_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
