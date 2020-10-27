const express = require("express");
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");
const { jwtAuthenticate } = require("../middleware/auth");

const router = express.Router();

router.use(jwtAuthenticate);

router.get("/", getOrders);
router.post("/", createOrder);

router.get("/:orderId", getOrder);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

module.exports = router;
