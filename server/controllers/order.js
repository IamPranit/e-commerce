const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User");
const { findById } = require("../models/User");

// @desc   Get All Orders
// @route  GET /api/v1/order
// @access Admin
exports.getOrders = async (req, res, next) => {
  try {
    const order = await Order.find();

    res.status(200).json({
      success: true,
      total_orders: order.length,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc   Get Single Order
// @route  GET /api/v1/order/:id
// @access User/Admin
exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate("customer", "name address")
      .populate("cart", "cartState cartItems totalCartPrice");

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc   Create Order
// @route  POST /api/v1/order
// @access User/Admin
exports.createOrder = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      customerId: req.userConsumer._id,
    }).exec();

    const customer = await User.findById(req.userConsumer._id);

    // Modify request body to include User's already stored data from User Database
    await Cart.findByIdAndUpdate(
      cart._id,
      { cartState: "Ordered" },
      {
        new: true,
        runValidators: true,
      }
    );

    req.body.shippingAddress
      ? req.body.shippingAddress
      : (req.body.shippingAddress = customer.address);

    req.body.customer = customer._id;
    req.body.cart = cart._id;

    const order = await Order.create(req.body);

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc   Update Order
// @route  PUT /api/v1/order/:orderId
// @access User/Admin
exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc   Delete Order
// @route  DELETE /api/v1/order/:orderId
// @access User/Admin
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      res.status(404).json({
        success: true,
        data: "Order not found!",
      });
    } else {
      await Order.findByIdAndDelete(req.params.orderId);
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};
