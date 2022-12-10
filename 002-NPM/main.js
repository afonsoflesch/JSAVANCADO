const express = require('express');
const app = express();

const crud_cervejas = require('./cervejas')
// rota raiz
app.get('/', function (req, res) {
    res.send('<h1>CURSO JSAvançado </h1>');
});

app.get('/cerveja', function(req, res){
    res.send(crud_cervejas.read())
});

app.post('/cerveja', function (req, res){
    res.send('Cadastrado com sucesso');
})
app.put('/cerveja', function (req, res){
    res.send('alterado com sucesso');
})
app.delete('/cerveja', function (req, res){
    res.send('Deletado com sucesso');
})


app.listen(3000);