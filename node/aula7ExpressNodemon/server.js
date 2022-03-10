const express = require('express');
const app = express();

// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato


//         Criar   let   atualizar deletar
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

/*app.get('/', (req, res) => {
    res.send('Hello <b>world</b>!');
});*/

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});