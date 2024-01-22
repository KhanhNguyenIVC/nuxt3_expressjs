'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('players', [{
      name: 'Viet Andre',
      teamId: 1,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Viet Andre02',
      teamId: 1,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lerbon Jame',
      teamId: 2,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lerbon Jame02',
      teamId: 2,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Durrant Reyrio',
      teamId: 3,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Durrant Reyrio01',
      teamId: 3,
      skill: 'dunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Stephen Curry',
      teamId: 4,
      skill: 'shot',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Stephen Curry02',
      teamId: 4,
      skill: 'shot',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('players', null, {});
  }
};
