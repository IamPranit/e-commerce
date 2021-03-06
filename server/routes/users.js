const express = require("express");
const {
  getUsers,
  getUser,
  getUserWithCookie,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

// Authentication Middleware
const { jwtAuthenticate, adminAccess } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(adminAccess, getUsers).post(createUser);
router.get("/search", jwtAuthenticate, getUserWithCookie);

router.get("/:id", jwtAuthenticate, getUser);

router
  .route("/:id")
  .put(jwtAuthenticate, updateUser)
  .delete(jwtAuthenticate, deleteUser);

module.exports = router;
