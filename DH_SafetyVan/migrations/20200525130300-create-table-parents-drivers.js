'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parents-drivers',
    {
      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parents_id:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: 'parents'
          },
          key: 'id'
        }
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parents-drivers');
  }
};
