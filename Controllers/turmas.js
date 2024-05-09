const { where } = require("sequelize");
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

exports.updateTurma = async (req, res) => {  // Cria uma função chamada updateTurma
    const codigoTurma = req.params.codigo; // Cria uma varíavel onde se adquire informações do banco de dados

    try { // "Tente"
        const turmaCadastrada = await Turmas.findOne({ where:{ codigo: codigoTurma }}); // 

        if (turmaCadastrada) {

            delete req.body.codigo // Delete como medida de segurança, pois nem toda a informação pode ser atualizada ao mesmo tempo

            const [numRowsUpdated] = await Turmas.update(req.body, { // Array que faz uma contagem de nº de linha de atualização
                where: { codigo: codigoTurma }
            });

            if (numRowsUpdated > 0) { // Verifica a array
                const turmaAtualizada = await Turmas.findOne({ where: { codigo: codigoTurma }});
                return res.send({ message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada});
            }
            else {
                return res.send('Turma encontrada, porém sem novos dados para atualizar')
            }
        }
        else {
            return res.status(404).send('Não existe um turma cadastrada com este código.');
        }
    } catch (error) {
        console.error('Erro ao atualizar turma', error);
        return res.status(500).send('Ocorreu um erro ao atualizar turma.')
    }}