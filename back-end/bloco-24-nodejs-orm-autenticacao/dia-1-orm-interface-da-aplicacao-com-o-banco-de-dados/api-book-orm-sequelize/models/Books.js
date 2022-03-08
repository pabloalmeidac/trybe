'use strict';

const Books = (sequelize, DataTypes) => {
  const Book = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, 
  {
    underscored: true,
    tableName: 'Books',
  });

  return Book;
};

module.exports = Books;
