const jwt = require("jsonwebtoken");

// Sign token and return Signed token
const jwtSignToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = { jwtSignToken };
