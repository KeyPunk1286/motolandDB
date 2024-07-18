const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Motorcycles = require("./motorcyclesModel");

const MotoBrand = sequelize.define("moto_brand", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

MotoBrand.hasMany(Motorcycles, { foreignKey: "fk_motoBrandId" });
console.log("motobrand", MotoBrand);
module.exports = MotoBrand;
