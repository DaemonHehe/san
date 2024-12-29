import { Router } from "express";
import {
  createProduct,
  getSingleProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/:id", getSingleProduct);
router.get("/", getAllProduct);

export default router;
