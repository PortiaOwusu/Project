const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const { verifyProduct } = require("../controller/pharmacyAuthController");
const { verifyToken } = require("../controller/adminAuthController");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(verifyToken, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(verifyToken, productController.updateProduct)
  .delete(verifyToken, productController.deleteProduct);

module.exports = router;
