import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/get-all", getAllUsers);
router.get("/get", getUser);
router.delete("/delete", deleteUser);
router.put("/update", updateUser);

export default router;
