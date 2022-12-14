const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

async function main() {
    const func = await prisma.employee.create({
        data:{
            nome: "Nome Teste",
            rg: 0000000,
            cpf: 00000000000,
            data_nascimento: '2021-02-03' + 'T00:00:00.000Z',
            data_contratacao: '2021-02-03' + 'T00:00:00.000Z',
            endereco: "Endereço Teste, 000",
            funcao: "Função Teste",
            departamento: "Departamento Teste",
            salario: 11111111,
            email: "teste@teste.com.br",
            telefone: 9999999,
            data_saida: '2021-02-03' + 'T00:00:00.000Z',
            pix: "Pix Teste",
            estagio: "Estagio Teste",
            horas_alocadas: 0000,
            modelo_contratacao: "Contratação Teste",
            turn_over: "Teste"
        }
    });
    console.log(func);
};

async function search() {
    const func = await prisma.employee.findMany();
    console.log(func);
};

main();
search();
