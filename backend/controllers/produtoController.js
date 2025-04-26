const connection = require('../db');

// Listar todos os produtos
exports.listarProdutos = (req, res) => {
  const query = 'SELECT * FROM produtos';
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar produtos' });
    res.json(results);
  });
};

// Adicionar um novo produto
exports.adicionarProduto = (req, res) => {
  const { nome, descricao, quantidade, preco, categoria } = req.body;
  if (!nome || !quantidade || !preco || !categoria) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const query = 'INSERT INTO produtos (nome, descricao, quantidade, preco, categoria) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [nome, descricao, quantidade, preco, categoria], (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao adicionar produto' });
    res.status(201).json({ message: 'Produto adicionado com sucesso', id: results.insertId });
  });
};

// Atualizar um produto existente
exports.atualizarProduto = (req, res) => {
  const { id } = req.params;
  const { nome, descricao, quantidade, preco, categoria } = req.body;
  if (!nome || !quantidade || !preco || !categoria) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const query = 'UPDATE produtos SET nome = ?, descricao = ?, quantidade = ?, preco = ?, categoria = ? WHERE id = ?';
  connection.query(query, [nome, descricao, quantidade, preco, categoria, id], (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar produto' });
    res.json({ message: 'Produto atualizado com sucesso' });
  });
};

// Remover um produto
exports.removerProduto = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM produtos WHERE id = ?';
  connection.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao remover produto' });
    res.json({ message: 'Produto removido com sucesso' });
  });
};  