-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL,
    "cpf" INTEGER NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "data_contratacao" TIMESTAMP(3) NOT NULL,
    "endereco" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "salario" INTEGER,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "data_saida" TIMESTAMP(3),
    "pix" TEXT,
    "estagio" TEXT,
    "horas_alocadas" INTEGER NOT NULL,
    "modelo_contratacao" TEXT NOT NULL,
    "turn_over" TEXT,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_rg_key" ON "funcionarios"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_cpf_key" ON "funcionarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_email_key" ON "funcionarios"("email");
