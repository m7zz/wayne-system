# 🦇 Wayne System

Sistema full stack inspirado nas Indústrias Wayne (Batman), desenvolvido como projeto final.

A proposta foi criar uma aplicação completa com gerenciamento de recursos e controle de acesso por tipo de usuário.

---

## 🚀 Funcionalidades

* 🔐 Login com autenticação no backend
* 👥 Controle de acesso por nível:

  * Admin
  * Gerente
  * Funcionário
* 📦 CRUD completo de recursos
* 📊 Dashboard com visualização dos dados
* 🛡️ Proteção de rotas (não acessa sem login)
* 🎨 Interface dark estilo Batman

---

## 🧠 Tecnologias utilizadas

**Frontend:**

* HTML
* CSS
* JavaScript

**Backend:**

* Node.js
* Express

**Banco de dados:**

* SQLite

---

## 📁 Estrutura do projeto

/backend
    /controllers
    /routes
    /models
    /utils
    /database

/frontend
    /pages
    /assets

---

## 🔑 Usuários para teste

admin / 123
gerente / 123
funcionario / 123

---

## 🛠️ Como rodar o projeto

1. Clone o repositório
2. Acesse a pasta backend
3. Instale as dependências:

npm install

4. Inicie o servidor:

node server.js

5. Abra o arquivo login.html no navegador

---

## ⚠️ Observações

* Projeto focado em aprendizado (sem uso de JWT)
* Autenticação feita no backend
* Controle de acesso usando localStorage

---

## 💡 Objetivo

Este projeto foi desenvolvido para praticar:

* Integração entre frontend e backend
* Criação de API REST
* Organização em padrão MVC
* Autenticação e autorização

---

## 👤 Autor

Feito por [m7zz](https://github.com/m7zz)
