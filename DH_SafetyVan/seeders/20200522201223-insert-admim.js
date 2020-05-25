'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        name: 'admin',
        email: 'admin@mail.com',
        password: '$2b$10$ocMQLCdEfOfr4r4Ef6mDye8l2hVNrOebCs8HGMjXk4U1wq56ZQzZi',
        roles_id: '1',
        createdAt: new Date,
        updatedAt: new Date,
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
