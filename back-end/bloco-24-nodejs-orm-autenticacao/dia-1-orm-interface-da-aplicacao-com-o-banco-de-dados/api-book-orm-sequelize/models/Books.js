'use strict';

const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    email: DataTypes.STRING,
  });

  return Books;
};

module.exports = Books;
