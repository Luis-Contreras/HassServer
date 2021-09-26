import { Router } from "express";
import { createUser, login } from "../controllers/userControl";

const router = Router();

router.post("/login", login);

router.post("/createUser", createUser);

export default router;
