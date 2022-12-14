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
    data_nascimento,
    data_contratacao,
    endereco,
    funcao,
    departamento,
    salario,
    email,
    telefone,
    data_saida,
    pix,
    estagio,
    horas_alocadas,
    modelo_contratacao,
    turn_over,
  } = req.body;
  try {
    const funcionario = await prisma.employee.create({
      data: {
        nome,
        rg,
        cpf,
        data_nascimento,
        data_contratacao,
        endereco,
        funcao,
        departamento,
        salario,
        email,
        telefone,
        data_saida,
        pix,
        estagio,
        horas_alocadas,
        modelo_contratacao,
        turn_over,
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
    try{
        const todos_funcionarios = await prisma.employee.findMany()
        console.log(todos_funcionarios);
    res.json({ status: 200, message: "Funcionários cadastrados", todos_funcionarios });
    } catch (err){
        console.error(err);
    res.json({
      status: 400,
      error: "Dados não encontrados"
    });
    }   
};

exports.search = async (req, res) => {
    const { nomeFuncionario } = req.params;
    console.log(nomeFuncionario)
    try{
        const func = await prisma.employee.findMany({
            where: {
              nome: {
                startsWith: nomeFuncionario,
                mode: "insensitive",
              },
            },
        });
        res.json({ status: 200, func });

    } catch (err){
        console.error(err);
    res.json({
      status: 400,
      error: "Dados não encontrados"
    });
    }  
};

exports.updateOne = async (req, res) => {
    const { cpf, nome } = req.params;
    const cpf_int = parseInt(cpf)
    
      try{
        const func_edit = await prisma.employee.update({
            where: {
                cpf: cpf_int
            },
            data:{
                nome
            }
          })
          res.json({ status: 200, func_edit });
      } catch (err){
        console.error(err);
        res.json({
            status: 400,
            error: "Dados não editados"
        });
    } 
};

exports.deleteOne = async (req, res) => {
    const { cpf } = req.params;
    const cpf_int = parseInt(cpf)
    
      try{
        const func_edit = await prisma.employee.delete({
            where: {
                cpf: cpf_int
            }
          })
          res.json({ status: 200, func_edit });

      } catch (err){
        console.error(err);
        res.json({
            status: 400,
            error: "Dados não deletados"
        });
    } 
}