const Cart = require("../models/Cart");

// @desc    Get All Carts
// @route   GET /api/v1/carts
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

// @desc    Get Single Carts
// @route   GET /api/v1/carts/:id
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
// @route /api/v1/carts
// @access Private
const createCart = async (req, res, next) => {
  try {
    const newCart = req.body;

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
// @route /api/v1/carts/:id
// @access Private
const updateCart = async (req, res, next) => {
  try {
    const updatedCart = req.body;

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
// @route /api/v1/carts/:id
// @access Private
const deleteCart = async (req, res, next) => {
  try {
    await Cart.findOneAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getCarts, getCart, createCart, updateCart, deleteCart };
