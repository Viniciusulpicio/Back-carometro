const TipoUsuario = require('../Models/Tipos_Usuarios');

exports.getAll = async (req, res) => {
    const tipoUsuario = await TipoUsuario.findAll();
    res.json(tipoUsuario)
};

exports.getById = async (req, res) => {
    //no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const tipoEncontrado = await TipoUsuario.findOne({ where:{ idTipos_Usuarios: idDoParam} });
    res.json(tipoEncontrado)
};

exports.createTipoUsuario = async (req, res) => {

    const TipoCadastrado = await TipoUsuario.findOne({ where: { descricao: req.body.descricao } });
    //verificacao duplicidade Tipo de Usuario cadastrado
    if (TipoCadastrado) {
        return res.send('Já existe um tipo de usuário cadastrado com está descrição.')
    }

const tipoCriado = await TipoUsuario.create(req.body)
console.log("tipoCriado", tipoCriado)
return res.send("Tipo de Usuário Cadastrado")
};