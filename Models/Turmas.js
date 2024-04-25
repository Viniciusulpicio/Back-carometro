const Sequelize = require('sequelize');
const sequelize = require('../Config/sequelize');

const Turmas = sequelize.define("Turmas", {
        // define as informações da tabela colunas
    idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Define essa coluna como a chave primaria
        autoIncrement: true // Indica que é uma chave primaria auto incrementavel 
    },

    codigo: Sequelize.STRING,
    descricao: Sequelize.STRING,
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
    fotos: Sequelize.STRING,
},
{
        // Precisa disso pq não tem as colunas createdAt e uploadAt no bd
        timestamps: false // Adiciona colunas createdAt e uploadAt automaticamente 
});

module.exports = Turmas;