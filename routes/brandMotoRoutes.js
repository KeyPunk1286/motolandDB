const express = require("express");
const router = express.Router();
const brandMotoController = require("../controllers/brandMotoControllers");

router.get("/", brandMotoController.getBrandMoto);

module.exports = router;
