const express = require('express');
const booksController = require('./controllers/booksController');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// listar todos os livros
app.get('/books', booksController.getAll);
app.get('/book/:author', booksController.getByAuthor);

// pega o livro com o id especificado
app.get('/book/:id', booksController.getById);

// cria um novo livro
app.post('/book', booksController.create);

// sobrescreve o livro com o id selecionado
app.post('/book/:id', booksController.update);

// deleta um livro
app.delete('/book/:id', booksController.exclude);

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));