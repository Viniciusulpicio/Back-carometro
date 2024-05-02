const Turmas = require("../Models/Turmas");

exports.getAll = async (req, res) =>{
    const turma = await Turmas.findAll();
    res.json(turma)
};

exports.getById = async(req, res) => {
    const idDoParam = req.params.id;
    const turmaEncontrada = await Turmas.findOne({where:{idTurmas: idDoParam}});
    res.json(turmaEncontrada)
}

exports.createTurma = async (req, res) => {
    const turmaCadastrada = await Turmas.findOne({where: {codigo : req.body.codigo}});
    // Verificação duplicidade do usuario cadastrado
    if (turmaCadastrada) {
        return res.send("Já existe uma turma cadastrado com esse código.")
    }
    const turmaCriada = await Turmas.create(req.body)
    console.log("turmasCriado", turmaCriada)
    return res.send("Turma cadastrado (deu certo viadin)")
    // res.json(usuario)
}