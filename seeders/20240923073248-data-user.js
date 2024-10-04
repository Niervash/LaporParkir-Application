'use strict';

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

    await queryInterface.bulkInsert("Users", [
      {
        nama: "julian",
        email: "julian@gmail.com",
        jenis_kelamin: "Pria",
        username: "@julian",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        nama: "bagas",
        email: "bagas@gmail.com",
        jenis_kelamin: "Wanita",
        username: "@bagas",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date()       
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
