const express = require("express");
const router = express.Router();
const pharmacyController = require("../controller/pharmacyController");
const pharmacyAuthController = require("../controller/pharmacyAuthController");

router.route("/").get(pharmacyController.getAllPharmacies);

router
  .route("/:id")
  .get(pharmacyController.getPharmacy)
  .delete(pharmacyController.deletePharmacy);

router.route("/registerpharmacy").post(pharmacyAuthController.signup);

router.route("/pharmacylogin").post(pharmacyAuthController.signin);

module.exports = router;
