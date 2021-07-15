const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Clients = require('../models/Clients');

const connection = new Sequelize(dbConfig);

User.init(connection);
Clients.init(connection);

Clients.associate(connection.models);

module.exports = connection;