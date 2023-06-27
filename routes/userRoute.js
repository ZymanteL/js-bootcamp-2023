import express from "express";
import { createUser, getAllUsers, deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/all-users", getAllUsers);
router.delete("/delete/:name", deleteUser);
router.put("/update/:name", updateUser);


export default router;
