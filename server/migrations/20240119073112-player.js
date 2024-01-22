'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('players', {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      skill: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('players');
  }
};
