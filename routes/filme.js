const express = require('express');
const Filme = require('./../models/Filme');
const router = express.Router();

router.get('/', (requisicao, resposta) =>{
    Filme.findAll()
    .then((filmes) => {
        resposta.render('filmes', {filmes: filmes});
    })
    .catch((erro) =>{
        console.log(erro)
    })
})

router.post('/cadastro', (requisicao, resposta) =>{
    const { titulo, diretor, lancamento, genero, descricao } = requisicao.body;
    console.log('seila')
    Filme.create({titulo, diretor, lancamento, genero, descricao})
    .then(() =>{
        console.log("funcionou")
        resposta.send('filme cadastrado');})
        .catch((erro) =>{
            console.log(erro);
            resposta.send('filme nao cadastrado');
        })
    })

module.exports = router;