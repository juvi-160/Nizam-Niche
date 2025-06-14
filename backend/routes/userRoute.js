import express from "express";
import { loginUser, registerUser, adminLogin, getAllUsers,getUserStats,  getRecentUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin", adminLogin);

// 👇 New route
router.get("/all", getAllUsers);
router.get("/stats", getUserStats);
router.get("/recent", getRecentUsers);


export default router;
