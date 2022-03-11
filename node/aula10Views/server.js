// Vamos ver o padrão MVC aqui tbem ou
// FullMVC pra ser mais exato, engloba tudo, front, back etc

// criamos a pasta controle e um controle para cada coisa

// o arquivo routes.js é uma especie de roteador

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// http://facebook.com/profiles/5 - params 5, 4, 3 etc
// http://facebook.com/profiles/123?campanha=googleads - query strings - chave e valor

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views')); //caminho absoluto
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});