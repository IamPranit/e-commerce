const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add product name"],
  },
  maker: {
    type: String,
    required: [
      true,
      "Please add name of person or company who makes the product",
    ],
  },
  description: {
    type: String,
    required: [true, "Please add description for the product"],
  },
  image: {
    type: String,
    required: [true, "Please add an URL"],
  },
  category: {
    type: String,
    required: [true, "Please specify which category the product belongs to"],
  },
  price: {
    type: String,
    required: [true, "Please specify price of the product"],
  },
  inStock: {
    type: Boolean,
    required: [true, "Please specify if the product is in stock"],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
