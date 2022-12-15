const express = require("express");
const routes = express.Router();

const controller_funcionarios = require("../controllers/controller_Funcionarios");
const controller_clientes = require("../controllers/controller_Clientes");

// Rotas de Funcionários
routes.get("/", controller_funcionarios.welcome);
routes.post("/funcionarios", controller_funcionarios.create);

routes.get("/funcionarios", controller_funcionarios.searchAll);
routes.get("/funcionarios/:nomeFuncionario", controller_funcionarios.search);
routes.get("/funcionarios/buscar/:id", controller_funcionarios.search_Id);

routes.put("/funcionarios/:id", controller_funcionarios.updateOne);
routes.delete("/funcionarios/:id", controller_funcionarios.deleteOne);

//Rotas de Clientes
routes.post("/clientes", controller_clientes.create);
routes.get("/clientes", controller_clientes.searchAll);
routes.get("/clientes/:id", controller_clientes.search);
routes.put("/clientes/:id", controller_clientes.updateOne);
routes.delete("/clientes/:id", controller_clientes.deleteOne);

module.exports = routes;
