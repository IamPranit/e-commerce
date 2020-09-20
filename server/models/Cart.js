const mongoose = require("mongoose");

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
    type: String,
    required: [true, "Please add the user's ID who's using this cart"],
  },
});

module.exports = mongoose.model("Cart", CartSchema);
