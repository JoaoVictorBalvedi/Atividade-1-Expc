const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Listar produtos
router.get('/produtos', produtoController.listarProdutos);

// Adicionar produto
router.post('/produtos', produtoController.adicionarProduto);

// Atualizar produto
router.put('/produtos/:id', produtoController.atualizarProduto);

// Remover produto
router.delete('/produtos/:id', produtoController.removerProduto);

module.exports = router;