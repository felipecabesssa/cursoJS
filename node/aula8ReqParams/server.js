const express = require('express');
const app = express();

// http://facebook.com/profiles/5 - params 5, 4, 3 etc
// http://facebook.com/profiles/123?campanha=googleads - query strings - chave e valor

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que vc me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});