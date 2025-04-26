const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');

// Criar uma instância do Express
const app = express();

// Middleware para permitir requisições CORS
app.use(cors());

// Middleware para processar JSON no corpo das requisições
app.use(bodyParser.json());

app.use('/api', produtoRoutes);

// Exportar o app para ser usado em outros arquivos
module.exports = app;