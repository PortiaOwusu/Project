const Admin = require("../model/Admin");

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({ admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update buyer

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Buyer.deleteOne(id);
    res.status(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAdmins,
  getAdmin,
  deleteAdmin,
};
