const { where } = require('sequelize');
const Usuario = require ('../Models/usuarios');

exports.getAll = async(req, res) => {
    const usuario = await Usuario.findAll();
    res.json(usuario)
};

exports.getById = async (req, res) => {
    // no router id é o que vem depois do usuario
    const idDoParam = req.params.id;
    const usuarioEncontrado = await Usuario.findOne({idUsuarios:idDoParam});
    res.json(usuarioEncontrado)
};

exports.createUsuario = async (req,res) => {
    const usuarioCadastrado = await Usuario.findOne({ where: {cpf: req.body.cpf}});
    // Verificação duplicidade do usuario cadastrado
    if (usuarioCadastrado) {
        return res.send("Já existe um usuario cadastrado com esse CPF.")
    }
    const usuarioCriado = await Usuario.create(req.body)
    console.log("usuarioCriado", usuarioCriado)
    return res.send("oi")
    // res.json(usuario)
};