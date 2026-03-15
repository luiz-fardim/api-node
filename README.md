# 📚 API de Usuários - Node.js

API REST simples para gerenciamento de usuários, desenvolvida com Node.js e Express.  
Este projeto foi criado com o objetivo de praticar conceitos de construção de APIs REST, rotas e métodos HTTP.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- JSON

---

## 📌 Funcionalidades

A API permite:

- Listar todos os usuários
- Buscar um usuário por ID
- Criar um novo usuário
- Atualizar um usuário existente
- Deletar um usuário

---

## 📂 Rotas da API

### Buscar todos usuários
```
GET /usuarios
```

### Buscar usuário por ID
```
GET /usuarios/:id
```

### Criar usuário
```
POST /usuarios
```

Body da requisição:

```json
{
  "nome": "João"
}
```

### Atualizar usuário
```
PUT /usuarios/:id
```

Body da requisição:

```json
{
  "nome": "Carlos"
}
```

### Deletar usuário
```
DELETE /usuarios/:id
```

---

## ▶️ Como rodar o projeto

1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre na pasta do projeto

```
cd nome-do-projeto
```

3. Instale as dependências

```
npm install
```

4. Inicie o servidor

```
node index.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 🧪 Testando a API

Você pode testar usando:

- Thunder Client
- Postman
- Insomnia

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

- Criação de APIs REST
- Métodos HTTP (GET, POST, PUT, DELETE)
- Estrutura de rotas
- Manipulação de dados em memória

---

## 👨‍💻 Autor

Luiz  
Estudando desenvolvimento Full Stack 🚀
