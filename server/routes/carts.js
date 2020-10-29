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
const { validateCart } = require("../middleware/validateCart");

const router = express.Router();

router.use(jwtAuthenticate);

router.get("/", getCarts);
router.get("/search", findCart);
router.post("/", createCart);

router.get("/:id", validateCart, getCart);
router.put("/:id", validateCart, updateCart);
router.delete("/:id", validateCart, deleteCart);

module.exports = router;
