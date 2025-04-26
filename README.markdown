# 🛒 Sistema de Gestão de Estoque

![GitHub top language](https://img.shields.io/badge/Language-JavaScript-blue) ![React](https://img.shields.io/badge/React-18.x-blueviolet) ![Node.js](https://img.shields.io/badge/Node.js-16.x-green) ![MySQL](https://img.shields.io/badge/MySQL-8.x-yellow)

> Este é um sistema web completo desenvolvido em **React**, **Node.js** e **MySQL** para gerenciar produtos em estoque. O projeto implementa operações CRUD (Create, Read, Update, Delete) e segue boas práticas de desenvolvimento.

O nome do aluno está visível no rodapé da aplicação: **João Victor Balvedi**.

## 🌟 Visão Geral

Este sistema permite a gestão de produtos em estoque, com funcionalidades para listar, cadastrar, editar e excluir itens. Ele foi desenvolvido como parte de um trabalho acadêmico e atende aos requisitos técnicos descritos na descrição do projeto.

## ✨ Funcionalidades

- **Listagem de Produtos:** Exibe todos os produtos cadastrados em uma tabela ou cards.
- **Cadastro de Produtos:** Permite adicionar novos produtos ao sistema.
- **Edição de Produtos:** Atualiza informações de produtos existentes.
- **Exclusão de Produtos:** Remove produtos do sistema.
- **Visualização Detalhada:** Mostra detalhes completos de um produto específico.

## 💻 Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL
- **Comunicação API:** Axios
- **Estilização:** Tailwind CSS
- **Ferramentas Adicionais:** Postman (para testes), MySQL Workbench (para gerenciamento do banco)

## ⚙️ Pré-requisitos

Antes de configurar o sistema, certifique-se de ter instalado:

1. **Node.js**: [Download](https://nodejs.org/en/download/)
2. **MySQL**: [Download](https://dev.mysql.com/downloads/installer/)
3. **Git**: [Download](https://git-scm.com/downloads)

## 🚀 Configuração do Projeto

### 1. Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados:
   - Importe o arquivo `.sql` fornecido no diretório `/database` para o MySQL.
   - No arquivo `db.js`, atualize as credenciais do banco de dados:
     ```javascript
     const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root', // Substitua pelo seu usuário do MySQL
       password: '', // Substitua pela sua senha do MySQL
       database: 'estoque_loja_computadores'
     });
     ```
4. Inicie o servidor backend:
   ```bash
   node server.js
   ```

### 2. Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor frontend:
   ```bash
   npm start
   ```

### 3. Banco de Dados

1. Abra o MySQL Workbench ou outra ferramenta de gerenciamento.
2. Execute o script SQL fornecido no diretório `/database` para criar o banco de dados e tabelas.
3. Certifique-se de que o banco de dados esteja configurado corretamente e acessível.

## ▶️ Execução do Sistema

Após configurar o backend e o frontend, abra o navegador e acesse:
```
http://localhost:3000
```

Você será redirecionado para a tela inicial do sistema, onde poderá:
- Listar produtos.
- Cadastrar novos produtos.
- Editar ou excluir produtos existentes.
- Visualizar detalhes de um produto específico.

## 👤 Autor

Desenvolvido por João Victor Balvedi como parte de um trabalho acadêmico.
