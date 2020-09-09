const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtAuthenticate = async (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    res.status(400).json({
      success: true,
      message: `User not authorized!`,
    });
  }

  try {
    // Verification
    const jwtDecoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(jwtDecoded.id);

    next();
  } catch (err) {
    console.log(err);
  }
};
