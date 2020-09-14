const mongoose = require("mongoose");

// BCrypt Utils
const {
  hashPassword,
  comparePasswordWithHash,
} = require("../utils/bcryptUtils");

const adminSchema = new mongoose.Schema({
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

adminSchema.pre("save", async () => {
  // Hash Password
  const hashedPassword = await hashPassword(this.password);

  // Set Password
  this.password = hashedPassword;
});
