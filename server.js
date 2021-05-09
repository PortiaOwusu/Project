require("dotenv").config();

const express = require("express");

const buyerRoutes = require("./route/buyerRoute");
const adminRoutes = require("./route/adminRoute");
const pharmacyRoutes = require("./route/pharmacyRoute");
const productRoutes = require("./route/productRoute");
const cors = require("cors");

require("./Config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/buyer", buyerRoutes);
app.use("/admin", adminRoutes);
app.use("/pharmacy", pharmacyRoutes);
app.use("/product", productRoutes);

// catch all routes not on the server
app.all("*", (req, res, next) => {
  res
    .status(404)
    .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

//
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

app.listen(4000, () => console.log("Server up and running"));
