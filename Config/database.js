// Arquivo de configuração de BD

module.exports = {
    development: {
        username: process.env.DB_USER || 'root',
        //username: 'root',

        password: 'senaisp',
        database: 'carometro',
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        logging: false
    },
    //Adicione mais ambientes (production, testing, etc) conforme necessario
};