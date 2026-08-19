const { findAll } = require ('./pessoa.service');
const buscarPessoas = async (req, res) => {
    try {
        const pessoas = await findAll();
        res.send(pessoas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const buscarPessoasPorID = async (req, res) => {
    const id = req?.params?.id;
    if (!id) {
        res.status(400).send('ID não fornecido');
        return;
    }
    try {
        const pessoa = await findById(id);
        if (!pessoa) {
            res.status(404).send('Pessoa não encontrada');
            return;
        }
        res.send(pessoa);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const criarPessoa = (req, res) => {
    res.send('cria uma nova pessoa');
};

const atualizarPessoa = (req, res) => {
    res.send('atualiza uma pessoa existente');
};

const deletarPessoa = (req, res) => {
    res.send('deleta uma pessoa existente');
};

module.exports = {
    buscarPessoas,
    buscarPessoasPorID,
    criarPessoa,
    atualizarPessoa,
    deletarPessoa
};

