const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your full name"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    required: [true, "Please add an email"],
  },
  address: {
    type: String,
    maxlength: 150,
    required: [true, "Please add address"],
  },
  role: {
    type: String,
    enum: ["user", "provider", "admin"],
    default: "user",
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 30,
    required: [true, "Please add password"],
  },
});

// JWT
UserSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
}; // Match entered password with db password

UserSchema.methods.jwtSignToken = async (id) => {
  const jwtSignedToken = await jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
}; // Sign token and return signed token

module.exports = mongoose.model("User", UserSchema);
