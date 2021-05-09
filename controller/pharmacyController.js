const Pharmacy = require("../model/Pharmacy");

const getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.status(200).json({ pharmacies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPharmacy = async (req, res) => {
  try {
    const { id } = req.params;
    const pharmacy = await Pharmacy.findById(id);
    res.status(200).json({ pharmacy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update Pharmacy

const deletePharmacy = async (req, res) => {
  try {
    const { id } = req.params;
    await Pharmacy.deleteOne(id);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPharmacies,
  getPharmacy,
  deletePharmacy,
};
