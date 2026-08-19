const { Router } = require('express');
const router = Router();
const { buscarPessoas, buscarPessoasPorID, criarPessoa, atualizarPessoa, deletarPessoa } = require('./pessoa.controller');

router.get('/', buscarPessoas);

router.get('/:id', buscarPessoasPorID);

router.post('/', criarPessoa);

router.put('/:id', atualizarPessoa);

router.delete('/:id', deletarPessoa);

module.exports = router;