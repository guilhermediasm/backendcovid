`use strict`

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Carrega as Rotas
const indexRout = require('./routes/index')
const insert = require('./routes/insert-json')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRout);
//app.use('/insert', insert);

module.exports = app;