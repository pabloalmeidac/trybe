const { Books } = require('../models');

const getAll = async (_req, res, _next) => {
  const bookAll = await Books.findAll();

  if (!bookAll) res.status(404).json({ message: 'Não existe nenhum livro'});

  return res.status(200).json(bookAll);
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (error) {
    next();
  }
}

const create = (req, res, next) => {
  try {
    console.log('create');
  } catch (error) {
    next();
  }
}

const update = (req, res, next) => {
  try {
    console.log('update');
  } catch (error) {
    next();
  }
}

const exclude = (req, res, next) => {
  try {
    console.log('exclude'); 
  } catch (error) {
    next();
  }
}
module.exports = { getAll, getById, create, update, exclude };