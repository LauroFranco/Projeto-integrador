'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drivers-schools',
    {
      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      drivers_id:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: 'drivers'
          },
          key: 'id'
        }
      },
      schools_id:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: 'schools'
          },
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('drivers-schools');
  }
};
