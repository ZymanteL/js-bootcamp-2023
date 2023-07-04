import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, loginUser, updateUser, countUsers, sortUsers, limitUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/get-all", getAllUsers);
router.get("/get", getUser);
router.delete("/delete", deleteUser);
router.put("/update", updateUser);
router.get('/count', countUsers)
router.get('/sort', sortUsers)
router.get('/limit', limitUsers)

export default router;
