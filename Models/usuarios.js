const Sequelize = require('sequelize');
const sequelize = require('../Config/sequelize');

const Usuario = sequelize.define("Usuarios", {
    // define as informações da tabela colunas

    idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Define essa coluna como a chave primaria
        autoIncrement: true // Indica que é uma chave primaria auto incrementavel 
    },

    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    foto: Sequelize.STRING,
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER,

},
{
    // Precisa disso pq não tem as colunas createdAt e uploadAt no bd
    timestamps: false // Adiciona colunas createdAt e uploadAt automaticamente 
});

module.exports = Usuario;