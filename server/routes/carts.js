const express = require("express");
const {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

const router = express.Router();

router.get("/", getCarts);
router.post("/", createCart);

router.get("/:id", getCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
