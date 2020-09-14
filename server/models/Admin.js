const mongoose = require("mongoose");

// BCrypt Utils
const {
  hashPassword,
  comparePasswordWithHash,
} = require("../utils/bcryptUtils");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Pleaase add username"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    required: [true, "Please add email"],
  },
  password: {
    type: String,
    required: [true, "Please add password"],
  },
});

AdminSchema.pre("save", async function () {
  try {
    // Hash Password
    const hashedPassword = await hashPassword(this.password);

    // Set Password
    this.password = hashedPassword;
  } catch (err) {
    console.log(err);
  }
});

module.exports = mongoose.model("Admin", AdminSchema);
