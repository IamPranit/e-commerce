const User = require("../models/User");
const Admin = require("../models/Admin");
const { jwtVerify } = require("../utils/jwtUtils");

const jwtAuthenticate = async (req, res, next) => {
  const token = req.cookies.jwtAuth;

  if (!token) {
    return res.status(400).json({
      message: `User not authorized!`,
    });
  }

  try {
    // Verification
    const jwtDecoded = jwtVerify(token);

    const user = await User.findById(jwtDecoded.id);

    if (!user) {
      return res.status(200).json({
        message: "User not authorized!",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
  }
};

const adminAccess = async (req, res, next) => {
  const token = req.cookies.jwtAuth;

  if (!token) {
    return res.status(400).json({
      message: "User not authorized!",
    });
  }

  try {
    // Verify Admin
    const jwtDecoded = jwtVerify(token);

    const admin = await Admin.findById(jwtDecoded.id);

    if (!admin) {
      return res.status(400).json({
        message: "User not authorized",
      });
    }

    req.user = admin;

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { jwtAuthenticate, adminAccess };
