const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");

const validateCart = async (req, res, next) => {
  try {
    const foundCart = await Cart.findOne({ customerId: req.userConsumer._id });

    if (foundCart) {
      const cartIdStr = foundCart._id.toString();
      if (cartIdStr === req.params.id) {
        next();
      }
    } else {
      return res.status(404).json({
        success: false,
        message: `Cart not found!`,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const validateOrder = async (req, res, next) => {
  try {
    const foundOrder = await Order.findOne({ customer: req.userConsumer._id });

    if (foundOrder) {
      const orderIdStr = foundOrder._id.toString();
      if (orderIdStr === req.params.id) {
        next();
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { validateCart, validateOrder };
