const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");

const LineItemSchema = new mongoose.Schema({
  lineItem: {
    type: mongoose.Schema.ObjectId,
    ref: Product,
  },
  quantity: {
    type: Number,
  },
});

const CartSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: User,
  },
  cartItems: [LineItemSchema],
  totalCartPrice: {
    type: Number,
    required: [true, "Total price of all the items in the cart is required"],
  },
  cartState: {
    type: String,
    enum: ["Active", "Merged", "Ordered"],
    default: "Active",
  },
  paymentMethod: {
    type: String,
    enum: ["UPI", "COD", "Credit/Debit Card"],
    default: "COD",
  },
});

// LineItemSchema.pre("save", function () {
//   const singleProductPrice = this.lineItemPrice;
//   this.lineItemPrice = singleProductPrice * this.lineItemQuantity;
// });

// CartSchema.pre("save", function () {
//   this.totalCartPrice = this.lineItemPrice;
// });

CartSchema.pre("findOne", function () {
  this.populate("customer", "name email address");
  this.populate({
    path: "cartItems",
    populate: {
      path: "lineItem",
      select: "name maker price",
    },
  });
});

module.exports = mongoose.model("Cart", CartSchema);
