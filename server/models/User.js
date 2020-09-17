const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// BCrypt Utils
const {
  hashPassword,
  comparePasswordWithHash,
} = require("../utils/bcryptUtils");

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
  password: {
    type: String,
    minlength: 8,
    required: [true, "Please add password"],
  },
});

// Hash Password before saving it to the Database
// By using arrow function inside of UserSchema.pre the value of "this" break hence use normal function syntax not ES6 syntax.
UserSchema.pre("save", async function () {
  // Hash Password
  hashedPassword = await hashPassword(this.password);

  // Set Password
  this.password = hashedPassword;
});

module.exports = mongoose.model("User", UserSchema);
