const jwt = require("jsonwebtoken");

// Sign token and return Signed token
const jwtSignToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Verify JWT
const jwtVerify = (receivedToken) => {
  return jwt.verify(receivedToken, process.env.JWT_SECRET);
};

module.exports = { jwtSignToken, jwtVerify };
