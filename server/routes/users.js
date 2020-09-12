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

router.get("/:id", jwtAuth, getUser);

router.route("/:id").put(jwtAuth, updateUser).delete(jwtAuth, deleteUser);

module.exports = router;
