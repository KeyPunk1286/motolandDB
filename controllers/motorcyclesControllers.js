// const { where } = require("sequelize");
const Motorcycles = require("../models/motorcyclesModel");

exports.create = async (req, res) => {
  try {
    const newMotorcycle = await Motorcycles.create(req.body);
    res.status(201).json(newMotorcycle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.gatAll = async (req, res) => {
  try {
    const motorcycles = await Motorcycles.findAll();
    res.status(200).json(motorcycles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const motorcycleById = await Motorcycles.findByPk(req.params.id);
    res.status(200).json(motorcycleById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updateInfo] = await Motorcycles.update(req.body, {
      where: { id: req.params.id },
    });
    if (updateInfo) {
      const ubdateMotorcycle = await Motorcycles.findByPk(req.params.id);
      res.json(ubdateMotorcycle);
    } else {
      res.status(404).json({ message: "Motorcycle not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleteMotorcycle = await Motorcycles.destroy({
      where: { id: req.params.id },
    });
    if (deleteMotorcycle) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Motorcycle not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
