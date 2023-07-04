import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, loginUser, updateUser } from "../controllers/userController.js";
import { verifySessionToken } from "../middlewares/authenticationCheck.js";

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/get-all", getAllUsers); //admin
router.get("/get", verifySessionToken, getUser);
router.delete("/delete", verifySessionToken, deleteUser);
router.put("/update", verifySessionToken, updateUser);

export default router;
