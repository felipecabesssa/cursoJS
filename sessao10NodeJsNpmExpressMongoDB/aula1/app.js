const path = require('path');
const axios = require('axios');
/* Esses 2 são nativos do Node, por isso não caminhamos por pastas,
só chamamos direto, porem para funcionar temos que iniciar o npm
pelo terminal (npm init -y) e instalar o axios (npm i axios) */

console.log('\nImportando o mod1.js todo\n');

const mod1 = require('./mod1');
// aqui não usamos o import como no ES6, usamor o require

// se rodarmos assim do jeito que ta ele roda igualzinho o mod1.js

// --------------------------------------------------------------------

console.log('\nImportando só a função falaNome do arquivo mod1.js\n');
// podemos importar só uma função do outro arquivo js, ex
// mas lembresse que pra importar primeiro deve-se exportar do outro lado, senão o compilador não enxerga a função.
const falaNome = require('./mod1').falaNome;
console.log(falaNome());

console.log('\nExemplo com classe\n');
// exemplo com classe

const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1);

// --------------------------------------------------------------------

console.log('\nImportando com axios\n');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
