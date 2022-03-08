'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        page_quantity: 457,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Vendedor de Sonhos',
        author: 'Augusto Cury',
        page_quantity: 296,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
