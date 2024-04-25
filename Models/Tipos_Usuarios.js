const Sequelize = require('sequelize');
const sequelize = require('../Config/sequelize');

const Tipos_Usuarios = sequelize.define("Tipos_Usuarios", {
    idTipos_Usuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Define essa coluna como a chave primaria
        autoIncrement: true // Indica que é uma chave primaria auto incrementavel 
    },

    descricao: Sequelize.STRING,
},
{
        // Precisa disso pq não tem as colunas createdAt e uploadAt no bd
        timestamps: false // Adiciona colunas createdAt e uploadAt automaticamente 
});

module.exports = Tipos_Usuarios;
