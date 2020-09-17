const jwt = require("jsonwebtoken");

// Sign token and return Signed token
const jwtSignToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Send JWT
const jwtSend = async (currentUser, userType, res) => {
  try {
    // Signed JWT / Create JWT
    const token = await jwtSignToken(currentUser._id);

    if (userType === "ADMIN") {
      res
        .status(200)
        .cookie("adminAuth", token, {
          maxAge: 24 * 60 * 60 * 1000,
        })
        .json({
          success: true,
          token,
        });
    } else {
      res
        .status(200)
        .cookie("consumerAuth", token, {
          maxAge: 24 * 60 * 60 * 1000,
        })
        .json({
          success: true,
          token,
        });
    }
  } catch (err) {
    console.log(err);
  }
};

// Verify JWT
const jwtVerify = (receivedToken) => {
  return jwt.verify(receivedToken, process.env.JWT_SECRET);
};

module.exports = { jwtSignToken, jwtSend, jwtVerify };
