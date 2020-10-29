const Cart = require("../models/Cart");

// @desc    Get All Carts
// @route   GET /api/v1/cart
// @access  Private
const getCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();

    res.status(200).json({
      success: true,
      data: carts,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Get Single Cart
// @route   GET /api/v1/cart/:id
// @access  Private
const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Create Cart
// @route /api/v1/cart
// @access Private
const createCart = async (req, res, next) => {
  try {
    const newCart = req.body;

    mergeUser(req);

    const cart = await Cart.create(newCart);

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Update Cart
// @route /api/v1/cart/:id
// @access Private
const updateCart = async (req, res, next) => {
  try {
    const updatedCart = req.body;

    const totalPrice = itemsTotalPrice(updatedCart.cartItems);

    updatedCart.totalCartPrice = totalPrice;

    const cart = await Cart.findByIdAndUpdate(req.params.id, updatedCart, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Delete Cart
// @route /api/v1/cart/:id
// @access Private
const deleteCart = async (req, res, next) => {
  try {
    const foundCart = await Cart.findOne({ customerId: req.userConsumer._id });

    if (foundCart) {
      const cartIdStr = foundCart._id.toString();
      if (cartIdStr === req.params.id) {
        await Cart.findOneAndDelete({ customerId: req.userConsumer._id });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: `Cart not found!`,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc  Find Cart
// @route /api/v1/cart/:cartId
// @access Private
const findCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      customerId: req.userConsumer._id,
    }).exec();

    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
  }
};

// Utility Functions

// Calculate total cart
const itemsTotalPrice = (itemsArr) => {
  let totalPrice = 0;
  for (const item of itemsArr) {
    totalPrice += item.lineItemPrice * item.quantity;
  }
  return totalPrice;
};

// Merge Cart with Customer ID
const mergeUser = (req) => {
  const loggedInUser = req.userConsumer;

  if (loggedInUser) {
    req.body.customerId = loggedInUser._id;
    req.body.cartState = "Merged";
    return req.body;
  } else {
    return req.body;
  }
};

module.exports = {
  getCarts,
  getCart,
  findCart,
  createCart,
  updateCart,
  deleteCart,
};
