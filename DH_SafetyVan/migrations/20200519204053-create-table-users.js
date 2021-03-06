'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.createTable('users', 
      { 
        id: 
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: 
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email:
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password:
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          unique: true,
        },
        birthdate: Sequelize.DATEONLY,
        phone: Sequelize.STRING,
        roles_id:
        {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'roles'
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
      return queryInterface.dropTable('users');
  }
};
