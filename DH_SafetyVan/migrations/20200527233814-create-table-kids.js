'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kids', {
      id: 
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:
      {
        type: Sequelize.STRING,
        notNUll: false,
      },
      birthdate: Sequelize.DATEONLY,
      avatar: Sequelize.STRING,
      parents_id:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: {
            tableName: 'parents'
          },
          key: 'id'
        }
      },
      schools_id:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: {
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
    return queryInterface.dropTable('kids');    
  }
};
