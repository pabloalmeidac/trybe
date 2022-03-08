const { Books } = require('../models');

const getAll = async (_req, res, next) => {
  try {
    const bookAll = await Books.findAll();
  
    if (!bookAll) res.status(404).json({ message: 'Não existe nenhum livro'});
  
    return res.status(200).json(bookAll);
  } catch (error) {
    next()
  }
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

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    newBook = await Books.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (error) {
    next();
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const updateBook = await Books.update(
      { title, author, pageQuantity }, 
      { where: {id}},
    );

    if(!updateBook) res.status(404).json({ message: 'Livro não encontrado' });
    
    return res.status(200).json({ message: 'Atualizado com sucesso' });
  } catch (error) {
    next();
  }
}

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteBook = await Books.destroy({ where: { id }});

    return res.status(200).json({ message: 'Livro excluido' });
  } catch (error) {
    next();
  }
}
module.exports = { getAll, getById, create, update, exclude };