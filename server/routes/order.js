const express = require("express");
const {
  getOrders,
  getOrder,
  getUserOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");
const { jwtAuthenticate } = require("../middleware/auth");
const { validateOrder } = require("../middleware/validateCart");

const router = express.Router();

router.use(jwtAuthenticate);

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/search", getUserOrder);

router.get("/:orderId", validateOrder, getOrder);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

module.exports = router;
