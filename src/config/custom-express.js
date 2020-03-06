const express = require('express');
const rotas = require('../app/controller/livro-controller');

const app = express();

module.exports = app;

rotas(app);
