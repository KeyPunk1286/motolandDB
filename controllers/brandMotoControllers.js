const BrandMoto = require("../models/motoBrandModel");

exports.getBrandMoto = async (req, res) => {
  try {
    const brands = BrandMoto.findAll();
    res.status(201).json(brands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
