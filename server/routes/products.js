const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const { adminAccess } = require("../middleware/auth");
const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProduct);

// Private/Admin Routes
router.post("/", adminAccess, createProduct);
router.put("/:id", adminAccess, updateProduct);
router.delete(":id", adminAccess, deleteProduct);

module.exports = router;
