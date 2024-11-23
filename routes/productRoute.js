const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.get("/", getAllProduct)

module.exports = router;
