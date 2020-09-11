const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// BCrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
    required: [true, "Please add password"],
  },
});

// Hash Password before saving it to the Database
// By using arrow function inside of UserSchema.pre the value of "this" break hence use normal function syntax not ES6 syntax.
UserSchema.pre("save", async function () {
  // Hash Password with bcrypt
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);

  this.password = hashedPassword;
});

// JWT
UserSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password, (err) => {
    if (err) return err;
  });
}; // Match entered password with db password

UserSchema.methods.jwtSignToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}; // Sign token and return signed token

module.exports = mongoose.model("User", UserSchema);
