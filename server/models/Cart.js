const mongoose = require("mongoose");

const LineItemSchema = new mongoose.Schema({
  lineItemProductId: {
    type: String,
    required: [true, "Please provide valid product ID"],
  },
  lineItemName: {
    type: String,
    required: [true, "Please provide product name"],
  },
  lineItemQuantity: {
    type: Number,
    min: 1,
  },
  lineItemPrice: {
    type: Number,
  },
});

const CartSchema = new mongoose.Schema({
  customerId: {
    type: String,
  },
  anonymousId: {
    type: String,
  },
  customerEmail: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  cartItems: {
    type: [LineItemSchema],
  },
  totalCartPrice: {
    type: Number,
    required: [true, "Total price of all the items in the cart is required"],
  },
  cartState: {
    type: String,
    enum: ["Active", "Merged", "Ordered"],
    default: "Active",
  },
  shippingAddress: {
    type: String,
    required: [true, "Please add shipping address"],
  },
  paymentMethod: {
    type: String,
    enum: ["UPI", "COD", "Credit/Debit Card"],
    default: "COD",
  },
});

LineItemSchema.pre("save", function () {
  const singleProductPrice = this.lineItemPrice;
  this.lineItemPrice = singleProductPrice * this.lineItemQuantity;
});

CartSchema.pre("save", function () {
  this.totalCartPrice = this.lineItemPrice;
});

module.exports = mongoose.model("Cart", CartSchema);
