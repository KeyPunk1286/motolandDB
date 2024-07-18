const express = require("express");
const app = express();

const sequelize = require("./config/database");

require("dotenv").config();

const PORT = process.env.APP_PORT || 5000;

// імпорт бренд
const brandMotoRoutes = require("./routes/brandMotoRoutes");

// імпорт мото
const motorcyclesRoutes = require("./routes/motorcyclesRoutes");

const start = async () => {
  try {
    sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    sequelize.sync();
    console.log("All models were synchronized successfully.");
    //===============================//
    app.use("/", brandMotoRoutes);
    //===============================//
    app.use("/motorcycle", motorcyclesRoutes);
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
