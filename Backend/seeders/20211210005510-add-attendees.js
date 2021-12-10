'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Attendees', [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        email: 'pablo@test.com',
        phone: '1123456789',
        job: 'Programador',
        idCountry: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Juan',
        lastName: 'Perez',
        email: 'test@test.com',
        phone: '1123456789',
        job: 'Programador',
        idCountry: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Pedro',
        lastName: 'Perez',
        email: 'test@test.com',
        phone: '1123456789',
        job: 'Programador',
        idCountry: 3,
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
