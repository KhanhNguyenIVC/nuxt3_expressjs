'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('educations', [{
      name: 'NuxtJs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'SolidJs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'VueJs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'ReactJs',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('educations', null, {});
  }
};
