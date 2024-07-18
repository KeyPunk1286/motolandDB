"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Отримання всіх брендів мотоциклів
    const brands = await queryInterface.sequelize.query(
      "SELECT * FROM moto_brand;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    //console.log("Brands:", brands); // Додайте цей рядок для перевірки виводу в консоль

    await queryInterface.bulkInsert("motorcycles", [
      {
        title: "CB400ss",
        model: "2000",
        color: "Red",
        price: 15000.0,
        fk_motoBrandId: brands.find((brand) => brand.brand_name === "Honda")
          ?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Estrella",
        model: "2005",
        color: "Green",
        price: 15000.0,
        fk_motoBrandId: brands.find((brand) => brand.brand_name === "Kawasaki")
          ?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Grasstracker",
        model: "2010",
        color: "white",
        price: 11000.0,
        fk_motoBrandId: brands.find((brand) => brand.brand_name === "Suzuki")
          ?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "sr400",
        model: "2019",
        color: "black",
        price: 18000.0,
        fk_motoBrandId: brands.find((brand) => brand.brand_name === "Yamaha")
          ?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "t120 Boneville",
        model: "2010",
        color: "yellow",
        price: 25000.0,
        fk_motoBrandId: brands.find((brand) => brand.brand_name === "Triuph")
          ?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Classic 650cc",
        model: "2019",
        color: "orange",
        price: 18000.0,
        fk_motoBrandId: brands.find(
          (brand) => brand.brand_name === "Royal Enfield"
        )?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Додайте інші записи тут з аналогічним пошуком fk_motoBrandId
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("motorcycles", null, {});
  },
};
