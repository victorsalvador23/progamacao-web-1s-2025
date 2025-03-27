const express = require('express');
const calc = require('./calculadora');
const app = express();

app.get('/', (req, res) => {
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas da aplicação:</h3>';
    html += '<p>/somar/:a/:b</p>';
    html += '<p>/subtrair/:a/:b</p>';
    html += '<p>/dividir/:a/:b</p>';
    html += '<p>/multiplicar/:a/:b</p>';
    res.send(html);
});

app.get('/somar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});