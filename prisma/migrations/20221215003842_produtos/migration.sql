-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "segmento" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
