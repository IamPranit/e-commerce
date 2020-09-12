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

    if (!userIdMatch(req)) {
      return res.status(400).json({
        message: `Bad Request`,
      });
    }

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
    const user = await User.create(req.body);

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
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Bad Request",
      });
    }

    console.log(req.user);

    if (!userIdMatch(req)) {
      return res.status(400).json({
        message: `Bad request`,
      });
    }

    // UserSchema.pre("save") does not work on PUT requests. Hence passwords are not getting hashed.
    // You cannot access the document being updated in pre('updateOne') or pre('findOneAndUpdate') query middleware.
    // If you need to access the document that will be updated, you need to execute an explicit query for the document.
    // For PUT requests (Workaround)
    if (updatedUser.password) {
      hashedPassword = await bcrypt.hash(updatedUser.password, saltRounds);

      updatedUser.password = hashedPassword;
    }

    const user = await User.findByIdAndUpdate(req.params.id, updatedUser, {
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
    if (!userIdMatch(req)) {
      return res.status(400).json({
        message: "Bad Request",
      });
    }

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

// Matches User ID (req.user) with Request Parameters (params.id) to check if requesting user is loggedIn user.
const userIdMatch = (req) => {
  console.log(`${req.user._id}  ${req.params.id}`);
  // req.user._id.valueOf() gives the real value of mongodb ObjectId as per MongoDB Documentation.
  return req.user._id.valueOf().toString() === req.params.id;
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
