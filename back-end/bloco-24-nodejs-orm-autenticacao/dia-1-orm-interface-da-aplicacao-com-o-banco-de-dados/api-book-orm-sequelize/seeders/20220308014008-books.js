'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        pageQuantity: 457,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Vendedor de Sonhos',
        author: 'Augusto Cury',
        pageQuantity: 296,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
