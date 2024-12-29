const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
} = require("../controllers/productController");
const { isAdmin, authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/:id", getSingleProduct);
router.get("/", getAllProduct);
router.post("/wishlist", authMiddleware, addToWishlist);

module.exports = router;
