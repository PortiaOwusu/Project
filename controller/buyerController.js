const Buyer = require("../model/Buyer");
const Buyers = require("../model/Buyer");

const getAllBuyers = async (req, res) => {
  try {
    const buyers = await Buyers.find();
    res.status(200).json({ buyers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBuyer = async (req, res) => {
  try {
    const { id } = req.params;
    const buyer = await Buyer.findById(id);
    res.status(200).json({ buyer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update buyer

const deleteBuyer = async (req, res) => {
  try {
    const { id } = req.params;
    await Buyer.deleteOne(id);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBuyers,
  getBuyer,
  deleteBuyer,
};
