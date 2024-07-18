// motorcyclesModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const MotoBrand = require("./motoBrandModel");

const Motorcycles = sequelize.define("motorcycles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fk_motoBrandId: {
    type: DataTypes.INTEGER,
    references: {
      model: "moto_brands",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});
console.log(",f,f,f,f,f,f", MotoBrand);
// Motorcycles.belongsTo(MotoBrand, { foreignKey: "fk_motoBrandId" });

module.exports = Motorcycles;
