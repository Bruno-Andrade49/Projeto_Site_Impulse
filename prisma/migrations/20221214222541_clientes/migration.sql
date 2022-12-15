/*
  Warnings:

  - You are about to drop the column `data_contratacao` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `data_nascimento` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `data_saida` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `funcao` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `horas_alocadas` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `modelo_contratacao` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `turn_over` on the `funcionarios` table. All the data in the column will be lost.
  - Added the required column `cargo` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataContratacao` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horasAlocadas` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modeloContratacao` to the `funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefoneWapp` to the `funcionarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "funcionarios" DROP COLUMN "data_contratacao",
DROP COLUMN "data_nascimento",
DROP COLUMN "data_saida",
DROP COLUMN "endereco",
DROP COLUMN "funcao",
DROP COLUMN "horas_alocadas",
DROP COLUMN "modelo_contratacao",
DROP COLUMN "telefone",
DROP COLUMN "turn_over",
ADD COLUMN     "cargo" TEXT NOT NULL,
ADD COLUMN     "dataContratacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataDemissao" TIMESTAMP(3),
ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "escolaVinculo" TEXT,
ADD COLUMN     "horasAlocadas" INTEGER NOT NULL,
ADD COLUMN     "modeloContratacao" TEXT NOT NULL,
ADD COLUMN     "telefoneWapp" TEXT NOT NULL,
ADD COLUMN     "turnOver" TEXT,
ALTER COLUMN "rg" DROP NOT NULL,
ALTER COLUMN "rg" SET DATA TYPE TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "salario" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cnpjApto" TEXT,
    "razaoSocial" TEXT NOT NULL,
    "endereco" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "emailResponsavel" TEXT NOT NULL,
    "nomeResponsavel" TEXT NOT NULL,
    "telefoneResponsavel" TEXT,
    "Situacao" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cnpj_key" ON "clientes"("cnpj");
