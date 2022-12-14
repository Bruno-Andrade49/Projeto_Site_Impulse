const express = require('express');
const routes = express.Router()

const controller_funcionarios = require('../controllers/controller_Funcionarios')

routes.get('/', controller_funcionarios.welcome);
routes.post('/funcionarios', controller_funcionarios.create);
routes.get('/funcionarios', controller_funcionarios.searchAll);
routes.get('/funcionarios/:nomeFuncionario', controller_funcionarios.search);
routes.put('/funcionarios/:cpf/:nome', controller_funcionarios.updateOne);
routes.delete('/funcionarios/:cpf', controller_funcionarios.deleteOne);

module.exports = routes;