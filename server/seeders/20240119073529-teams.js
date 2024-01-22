'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('teams', [{
      title: 'SaiGon Heat',
      quanlity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'CanTho Catfish',
      quanlity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'ThangLong Dragon',
      quanlity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Golden State Warrior',
      quanlity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
