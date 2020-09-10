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

    const credMatch = user.matchPassword(password);

    if (!credMatch) {
      res.status(401).json({
        message: `Invalid credentials`,
      });
    }

    jwtSend(user, 200, res);
  } catch (err) {
    console.log(err);
  }
};

// Send JWT
const jwtSend = async (user, status, res) => {
  // Signed JWT / Create JWT
  const token = user.jwtSignToken();
  console.log(token);

  res
    .status(200)
    .cookie("jwtAuth", token, {
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      token,
    });
};
