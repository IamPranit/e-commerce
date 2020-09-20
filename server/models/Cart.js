const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");

const cartProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Please provide valid product ID"],
  },
  productCounter: {
    type: Number,
    min: 1,
    required: [true, "Please provide needed number of product"],
  },
});

const CartSchema = new mongoose.Schema({
  cartProducts: {
    type: cartProductSchema,
    required: [true, "Please add a product in the cart"],
  },
  cartUser: {
    type: User,
    required: [true, "Please add the user who's using or will use this cart"],
  },
});

module.exports = mongoose.model("Cart", CartSchema);
