# Carômetro Escolar

Este projeto é composto por um frontend e um backend que juntos formam o Carômetro Escolar, desenvolvido como parte de um estudo sobre React, Node.js e Express.js. O frontend é responsável pela interface do usuário, enquanto o backend fornece uma interação com o banco de dados e processamento de dados relacionados aos alunos, turmas e outras entidades do sistema.

# Dependências
- Express.js: Framework web para Node.js usado para construir a aplicação backend.
- Sequelize: ORM (Object-Relational Mapping) para Node.js usado para interagir com o banco de dados MySQL.
- Dotenv: Módulo para carregar variáveis de ambiente a partir de um arquivo .env.
- Outras dependências: Veja o arquivo package.json para obter uma lista completa de dependências.

# Estrutura do Projeto
- index.js: Ponto de entrada da aplicação. Inicia o servidor Express e configura as rotas.
- Config/sequelize.js: Configuração do Sequelize para conexão com o banco de dados MySQL.
- Config/database.js: Configurações do banco de dados para diferentes ambientes (desenvolvimento, produção, teste).
- Models/usuario.js: Definição do modelo de usuário usando o Sequelize.
- Controllers/usuario.js: Controladores para manipular operações relacionadas aos usuários.
- routes/router.js: Definição das rotas da aplicação, onde as requisições são direcionadas para os controladores correspondentes.


## Frontend
O frontend `https://github.com/Viniciusulpicio/Front-carometro.git`  é responsável pela interface do usuário do Carômetro Escolar. Ele permite aos usuários visualizar turmas, salas, alunos e detalhes individuais do aluno. O frontend foi desenvolvido usando React, Axios, React Router e CSS.


### Ambos os componentes, frontend e backend, são complementares e necessários para o funcionamento completo do Carômetro Escolar.

