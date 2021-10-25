const express = require('express');
const UserController = require('./controllers/UserController');
const ClientsController = require('./controllers/ClientsController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/login', UserController.login);
routes.get('/users/:company_id/:item_id', ClientsController.getById);
routes.get('/users/:company_id/clients/all', ClientsController.index);
routes.put('/users/:company_id/editar/:item_id', ClientsController.update);
routes.post('/users/:company_id/clients', ClientsController.store);
routes.delete('/users/:company_id', ClientsController.delete);

module.exports = routes;