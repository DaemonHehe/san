import { Router } from "express";
import { createBlog, updateBlog } from "../controllers/blogController";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware";
const router = Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);