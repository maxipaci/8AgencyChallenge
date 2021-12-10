'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      {
        name: 'Argentina',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Brasil',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Mexico',
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
