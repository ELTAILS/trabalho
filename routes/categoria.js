const express = require('express');
const Categoria = require('./../models/Categoria');
const router = express.Router();

router.post('/',(requisicao, resposta) => {
    Categoria.create({nome:"Games"})
        .then(() => { 
    console.log('deu certo')
    resposta.send('categoria criada com sucesso');})
    .catch((erro) =>{
        console.log(erro);
        resposta.send('deu erro :/');
    })
})


module.exports = router;