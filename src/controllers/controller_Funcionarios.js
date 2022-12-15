const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.welcome = (req, res) => {
  res.json({ API: "API Site Impulse" });
};

exports.create = async (req, res) => {
  const {
    nome,
    rg,
    cpf,
    dataNascimento,
    dataContratacao,
    email,
    telefoneWapp,
    departamento,
    cargo,
    salario,
    pix,
    modeloContratacao,
    estagio,
    escolaVinculo,
    horasAlocadas,
    dataDemissao,
    turnOver
  } = req.body;
  try {
    const funcionario = await prisma.employee.create({
      data: {
        nome,
        rg,
        cpf,
        dataNascimento,
        dataContratacao,
        email,
        telefoneWapp,
        departamento,
        cargo,
        salario,
        pix,
        modeloContratacao,
        estagio,
        escolaVinculo,
        horasAlocadas,
        dataDemissao,
        turnOver
      },
    });
    console.log(funcionario);
    res.json({ status: 200, message: "Funcionário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados inválidos",
      message: "Um ou mais campos estão inválidos",
    });
  }
};

exports.searchAll = async (req, res) => {
  try {
    const todos_funcionarios = await prisma.employee.findMany();
    console.log(todos_funcionarios);
    res.json({
      status: 200,
      message: "Funcionários cadastrados",
      todos_funcionarios,
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados não encontrados",
    });
  }
};

exports.search = async (req, res) => {
  const { nomeFuncionario } = req.params;
  try {
    const func = await prisma.employee.findMany({
      where: {
        nome: {
          startsWith: nomeFuncionario,
          mode: "insensitive",
        },
      },
    });
    res.json({ status: 200, func });

  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados não encontrados",
    });
  }
};

exports.searchCPF = async (req, res) => {
  const { cpf } = req.params;
  try {
    const func = await prisma.employee.findMany({
      where: {
        cpf: cpf
    }
    })
  
    res.json({ status: 200, func });
    
  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados não encontrados",
    });
  }
};

exports.updateOne = async (req, res) => {
  const { cpff } = req.params;
  const {
    nome,
    rg,
    cpf,
    dataNascimento,
    dataContratacao,
    email,
    telefoneWapp,
    departamento,
    cargo,
    salario,
    pix,
    modeloContratacao,
    estagio,
    escolaVinculo,
    horasAlocadas,
    dataDemissao,
    turnOver
  } = req.body;
  
  try {
    const func_edit = await prisma.employee.update({
      where: {
        cpf: cpff
      },
      data: {
          nome,
          rg,
          cpf,
          dataNascimento,
          dataContratacao,
          email,
          telefoneWapp,
          departamento,
          cargo,
          salario,
          pix,
          modeloContratacao,
          estagio,
          escolaVinculo,
          horasAlocadas,
          dataDemissao,
          turnOver
      },
    });

    res.json({ status: 200, func_edit });

  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados não editados",
    });
  }
};

exports.deleteOne = async (req, res) => {
  const { cpf } = req.params;

  try {
    const func_edit = await prisma.employee.delete({
      where: {
        cpf: cpf,
      },
    });
    res.json({ status: 204, message: 'Funcionário removido com sucesso!' });
  } catch (err) {
    console.error(err);
    res.json({
      status: 400,
      error: "Dados não deletados",
    });
  }
};
