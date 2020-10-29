const User = require("../models/User");
const Cart = require("../models/Cart");

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

module.exports = { validateCart };
