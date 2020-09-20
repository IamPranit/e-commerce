const Product = require("../models/Product");

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Create single product
// @route   POST /api/v1/products
// @access  Private/Admin
const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      maker,
      description,
      image,
      category,
      price,
      inStock,
      rating,
    } = req.body;

    const product = await Product.create({
      name,
      maker,
      description,
      image,
      category,
      price,
      inStock,
      rating,
    });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Update single product
// @route PUT /api/v1/products/:id
// @access Private/Admin
const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedProduct,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Delete single product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
