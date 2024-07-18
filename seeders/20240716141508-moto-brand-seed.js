"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("moto_brand", [
      {
        brand_name: "Honda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: "Kawasaki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: "Suzuki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: "Yamaha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: "Triuph",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: "Royal Enfield",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("moto_brand", null, {});
  },
};
