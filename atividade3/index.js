const express = require('express');
const calc = require('./calculadora');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

app.get('/ola', (req, res) => {
    res.send('Hello, world!');
});

app.get('/ola/:nome', (req, res) => {
    res.send('Olá, ' + req.params.nome);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});