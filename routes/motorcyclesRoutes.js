const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controllers/motorcyclesControllers");

router.post("/motorcycles", motorcyclesController.create);
router.get("/motorcycles", motorcyclesController.gatAll);
router.get("/motorcycles/:id", motorcyclesController.getById);
router.put("/motorcycles/:id", motorcyclesController.update);
router.delete("/motorcycles/:id", motorcyclesController.delete);

module.exports = router;
