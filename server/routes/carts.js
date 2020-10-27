const express = require("express");
const {
  getCarts,
  getCart,
  findCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

const { jwtAuthenticate } = require("../middleware/auth");

const router = express.Router();

router.use(jwtAuthenticate);

router.get("/", getCarts);
router.get("/search", findCart);
router.post("/", createCart);

router.get("/:id", getCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
