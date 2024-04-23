// Inicia o sequelize 

const Sequelize = require('sequelize');
const databaseConfig = require('./database');

const sequelize = new Sequelize(databaseConfig.development);

//Agora você pode usar o objeto "sequelize" para interagir com o banco de dados 
module.exports = sequelize;