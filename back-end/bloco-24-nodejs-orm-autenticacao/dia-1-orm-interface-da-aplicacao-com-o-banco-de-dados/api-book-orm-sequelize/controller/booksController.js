const { Books } = require('../models');

const getAll = async (req, res, next) => {
  const bookAll = await Books.findAll();

  if(!bookAll) res.status(404).json({ message: 'Não existe nenhum livro'});
  
  return res.status(200).json(bookAll);
}

const getById = (req, res, next) => {
  try {
    console.log('getById');
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