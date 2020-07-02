'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('driverInfos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ajudante:{
        type: Sequelize.STRING,
      },
      qntCriancas:{
        type: Sequelize.INTEGER,
      },
      Idiomas:{
        type: Sequelize.STRING,
      },
      cadeirinha:{
        type: Sequelize.BOOLEAN,
      },
      cadeiraRoda:{
        type: Sequelize.BOOLEAN,
      },
      driver_id:
        {
          type: Sequelize.INTEGER,
          references: {
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
    return queryInterface.dropTable('driverInfos');
  }
};
