const express = require('express');
const UserController = require('./controllers/UserController');
const ClientsController = require('./controllers/ClientsController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/login', UserController.login);
// criar rota de login

routes.get('/users/:company_id/clients', ClientsController.index);
routes.post('/users/:company_id/clients', ClientsController.store);
routes.delete('/users/:company_id', ClientsController.delete);
//criar rota para edição de cliente

module.exports = routes;