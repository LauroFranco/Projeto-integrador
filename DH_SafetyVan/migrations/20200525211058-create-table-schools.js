'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schools', {
      id: 
      {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:
      {
        type: Sequelize.STRING,
        notNull: false,
      },
      email:
      {
        type: Sequelize.STRING,
        notNull: false,
      },
      phone:
      {
        type: Sequelize.STRING,
        notNull: false,
      },
      resp: Sequelize.STRING,
      cep:
      {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: Sequelize.STRING,
      complemento: Sequelize.STRING,
      district: Sequelize.STRING,
      city: Sequelize.STRING,
      uf: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schools');
  }
};
