const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your name of medicine."],
    },
    image: {
      type: String,
      required: [true, "Please provide an image of the medicine."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for your medicine."],
    },
    quantity: {
      type: Number,
      required: [true, " Please provide quantity available."],
    },
    price: {
      type: Number,
      required: [true, "Please provide price of medicine"],
    },
    // buyer: {
    //   type: Schema.Types.ObjectId,

    // },
    starRating: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true },
);

module.exports = model("Product", productSchema);
