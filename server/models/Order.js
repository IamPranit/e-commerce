const mongoose = require("mongoose");
const User = require("./User");
const Cart = require("./Cart");

const OrderSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Cart,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  shippingAddress: {
    type: String,
    required: [true, "Please provide Shipping Address"],
  },
  orderState: {
    type: String,
    enum: ["Open", "Confirmed", "Complete", "Cancelled"],
  },
  shipmentState: {
    type: String,
    enum: ["Shipped", "Ready", "Pending", "Delayed", "Partial", "Backorder"],
  },
  paymentState: {
    type: String,
    enum: ["BalanceDue", "Failed", "Pending", "CreditOwed", "Paid"],
  },
});

module.exports = mongoose.model("Order", OrderSchema);
