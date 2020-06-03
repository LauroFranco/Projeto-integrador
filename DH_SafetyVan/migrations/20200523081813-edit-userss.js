'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'users',
        'picture',
       Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'users',
        'picture',
    );
  }
};
