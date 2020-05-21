'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('addresses', 
      { 
        id: 
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        cep:
        {
          type: Sequelize.STRING,
          allowNull: false
        },
        street: Sequelize.STRING,
        complemento: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
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
      return queryInterface.dropTable('addresses');
  }
};
