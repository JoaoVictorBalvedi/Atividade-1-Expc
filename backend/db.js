const mysql = require('mysql2');

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário do MySQL
  password: 'balvedi2005', // Substitua pela sua senha do MySQL
  database: 'estoque_loja_computadores'
});

// Testar a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

// Exportar a conexão
module.exports = connection;