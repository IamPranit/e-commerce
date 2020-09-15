const express = require("express");

const {
  userLogin,
  userLogout,
  adminLogin,
  adminLogout,
} = require("../controllers/auth");

const router = express.Router();

router.post("/login", userLogin);

router.get("/logout", userLogout);

router.post("/adminlogin", adminLogin);

router.get("/adminlogout", adminLogout);

module.exports = router;
