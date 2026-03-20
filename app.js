const express = require('express')
const expHandlebars = require('express-handlebars')
const path = require('path')
const filmeRota = require('./routes/filme')

const db = require('./db/connection');
const bodyParser = require('body-parser');

const aplicacao = express();

//conf.body-parser
aplicacao.use(bodyParser.urlencoded({ extended: false }));

//Conf. Handlebars

aplicacao.set('views', path.join(__dirname, 'views'))

aplicacao.engine("handlebars", expHandlebars.engine({
    partialsDir: ["views/partials"],
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

aplicacao.set('view engine', 'handlebars')

aplicacao.use(express.static(path.join(__dirname, 'public')));
aplicacao.use(bodyParser.json());
aplicacao.use(express.json());

//Rotas
aplicacao.use('/filme', filmeRota);
aplicacao.use('/categoria', require('./routes/categoria'));

//aplicacao principal

aplicacao.get('/', (requisicao, resposta) => {
    resposta.redirect('/filme')
})
aplicacao.get('/cadastro', (requisicao, resposta) => {
    resposta.render("cadastro")
})

//Sincronizar modelos com banco
db.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch(err => console.log('Erro ao sincronizar banco:', err));

//autenticaçao com banco

db.authenticate()
    .then(() => {
        console.log('conectado ao banco')
    })
    .catch(erro => {
        console.log('deu erro', erro)
    })

aplicacao.listen(8000, () => {
    console.log('Inicioou o servidor')
})