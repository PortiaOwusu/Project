const Pharmacy = require("../model/Pharmacy");
const Product = require("../model/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(400).send({ message: "This product could not be found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, image, price, description, quantity } = req.body;
    if (!title || !image || !price || !description || !quantity) {
      res.status(400).send({ message: "Please enter all fields" });
      return;
    }
    const existProduct = await Pharmacy.findOne({ title });
    if (existProduct) {
      res.status(400).send({ message: "Product  already exist" });
      return;
    }

    const product = await Product.create({
      title,
      image,
      price,
      description,
      quantity,
    });
    res.status(201).send({ pharmacy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(500).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
