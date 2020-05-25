'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drivers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cnh: Sequelize.STRING,
      crm: Sequelize.STRING,
      marca: Sequelize.STRING,
      modelo: Sequelize.STRING,
      ano: Sequelize.STRING,
      placa: Sequelize.STRING,
      crmc: Sequelize.STRING,
      users_id:
        {
          type: Sequelize.INTEGER,
          references: {
            model: 
            {
              tableName: 'users'
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
    return queryInterface.dropTable('drivers');
  }
};
