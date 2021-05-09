const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const adminAuthController = require("../controller/adminAuthController");

router.route("/").get(adminController.getAllAdmins);

router
  .route("/:id")
  .get(adminController.getAdmin)

  .delete(adminController.deleteAdmin);

router.route("/registeradmin").post(adminAuthController.signup);

router.route("/adminlogin").post(adminAuthController.signin);

module.exports = router;
