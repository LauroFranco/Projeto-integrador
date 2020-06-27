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
        },
        password:
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: Sequelize.STRING,
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
