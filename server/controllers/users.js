const User = require("../models/User");
const jwt = require("jsonwebtoken");

// BCrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

// @desc    Get all Users
// @route   GET api/v1/users
// @access  Public
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Get Single User
// @route   GET api/v1/users/:id
// @access  Private
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({
        success: true,
        message: `User not found with id ${req.params.id}`,
      });
    } else {
      res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc    Create Single User
// @route   POST api/v1/users
// @access  Public
const createUser = async (req, res, next) => {
  try {
    // New user data
    const newUser = req.body;
    console.log(newUser);
    // Hash Password
    hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

    // Set Password
    newUser.password = hashedPassword;

    const user = await User.create(newUser);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Update User
// @route   PUT api/v1/users/:id
// @access  Private
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Delete Single User
// @route   DELETE api/v1/users/:id
// @access  Private
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).json({
        success: true,
        message: `User does not exist with id ${req.params.id}`,
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

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
