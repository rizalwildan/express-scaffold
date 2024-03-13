'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const usersData = [];
    const numUsers = 20;

    await queryInterface.bulkInsert('users', [
      {
        id: '31558ef1-0209-47ac-82fe-865a0af1f45a',
        name: 'Silvester Holigan',
        email: 'silvester_test@gmail.com',
        username: 'silvester',
        password: 'P4ssw0rd#'
      }
    ]);

    for (let i = 0; i < numUsers; i++) {
      usersData.push({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        email: faker.internet.email({}),
        password: await bcrypt.hash('P4ssw0rd#', 12)
      });
    }

    await queryInterface.bulkInsert('users', usersData);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null);
  }
};
