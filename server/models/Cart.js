const mongoose = require("mongoose");
const User = require("./User");

const CartSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  cartItems: [
    {
      lineItemId: {
        type: String,
        required: true,
      },
      lineItemPrice: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
  totalCartPrice: Number,
  cartState: {
    type: String,
    enum: ["Active", "Merged", "Ordered"],
    default: "Active",
  },
});

const totalLineItemPrice = (lineItemPrice, lineItemQuantity) => {
  return lineItemPrice * lineItemQuantity;
};

CartSchema.pre("save", function () {
  let totalPrice = 0;
  for (const lineItem of this.cartItems) {
    totalPrice += totalLineItemPrice(lineItem.lineItemPrice, lineItem.quantity);
  }

  this.totalCartPrice = totalPrice;
});

CartSchema.pre("findOne", function () {
  this.populate("customerId", "name email address");
});

module.exports = mongoose.model("Cart", CartSchema);
