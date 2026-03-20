const Sequelize = require('sequelize');
const db = require('../db/connection');

const Filme = db.define('filme',{
    titulo: {
        type: Sequelize.STRING
    },
    diretor:{
        type: Sequelize.STRING
    },
    lancamento:{ 
        type: Sequelize.DATE
    },
    genero: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    },


})

module.exports = Filme;