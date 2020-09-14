const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @desc    Login User
// @route   POST api/v1/users/:id
// @access  Public
exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: `Please enter credentials`,
      });
    }

    const user = await User.findOne({ email: email }).select("password");

    if (!user) {
      res.status(401).json({
        message: `Invalid credentials`,
      });
    }

    const credMatch = await user.matchPassword(password);
    console.log(credMatch);

    if (credMatch) {
      jwtSend(user, 200, res);
    } else {
      res.status(401).json({
        message: `Invalid credentials`,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Send JWT
const jwtSend = async (user, status, res) => {
  try {
    // Signed JWT / Create JWT
    const token = await user.jwtSignToken(user._id);

    res
      .status(200)
      .cookie("jwtAuth", token, {
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        token,
      });
  } catch (err) {
    console.log(err);
  }
};

// @desc    Logout User
// @route   POST api/v1/users/:id
// @access  Public
exports.userLogout = async (req, res, next) => {
  res
    .status(200)
    .cookie("jwtAuth", "none", {
      maxAge: 1000,
    })
    .json({
      message: "Successfully Logged Out",
    });
};
