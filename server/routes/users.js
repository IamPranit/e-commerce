const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

// Authentication Middleware
const jwtAuth = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").put(updateUser).delete(deleteUser);

router.get("/:id", jwtAuth, getUser);

module.exports = router;
