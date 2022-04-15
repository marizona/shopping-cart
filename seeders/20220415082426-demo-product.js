'use strict';

const { faker } = require("@faker-js/faker");
const products = [...Array(20)].map((product) => ({
  title: faker.commerce.productName(),
  img_url: `${faker.image.business()}?random=${faker.random.number()}`,
  price: faker.commerce.price(),
  qty: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

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

    await queryInterface.bulkInsert('Products', products, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Products", null, {});
  }
};
