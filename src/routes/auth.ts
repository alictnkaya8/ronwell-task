import { Router } from "express";
import { AuthController } from "@/app/controllers/authController";
import { register, login } from "@/app/validation/auth/index";
import { authMiddleware } from "@/app/middlewares/authMiddleware";

const authRouter = Router();

authRouter.post("/register", register, AuthController.register);
authRouter.post("/login", login, AuthController.login);
authRouter.get("/me", authMiddleware, AuthController.me);

export default authRouter;
