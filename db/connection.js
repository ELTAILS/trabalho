const Conexao = require('sequelize');

const sequelize = new Conexao({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize