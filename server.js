// Imports 
const express = require ('express');
const { Sequelize } = require('sequelize');
const sequelize = require ('./Config/sequelize');   
const router = require ('./Routes/router')
require('dotenv').config();

// Testar a conexão com o banco de dados 
sequelize.authenticate()
    .then(() => {
        console.log("Conexão com banco de dados bem sucedida");

        // Listar todas as tabelas do banco de dados 
        return sequelize.query("SHOW TABLES");
    })
    .then(([result, metadata]) =>{
        console.log("Tabelas no banco de dados:");
        console.log(result);

        /* Inicie o server
        app.listen(3000, () =>{
            console.log("Servidor Express iniciado na porta 3000");
        }); */
    })
    .catch(err =>{
        console.error("Erro ao conectar no banco de dados: ", err);
    });

// Criar uma instância do aplicativo Express
const app = express(); 

// Configura o servidor para aceitar requisições JSON usando express
app.use(express.json())
app.use(router);

//app.use(cookie-parser)

// Definir a porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor e ouvir na porta especificada 
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado na porta ${PORT}`);
});
