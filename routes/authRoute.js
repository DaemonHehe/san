const express = require("express");
const {
  createUser,
  loginUser,
  handleRefreshToken,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  logout,
  updatePassword,
  forgotPasswordToken,
} = require("../controllers/userController");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password", forgotPasswordToken);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/refresh", handleRefreshToken);
router.get("/all-users", getAllUser);
router.get("/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
