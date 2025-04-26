const app = require('./app');

// Definir a porta do servidor
const PORT = process.env.PORT || 3001;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});