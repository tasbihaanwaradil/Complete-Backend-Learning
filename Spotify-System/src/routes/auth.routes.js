import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register-user", registerUser);
//login
authRouter.get("/login-user", loginUser);

export default authRouter;
