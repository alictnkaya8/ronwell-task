import { Router } from "express";
import authRouter from "./auth";
import productRouter from "./product";
import { authMiddleware } from "@/app/middlewares/authMiddleware";

const router = Router();

router.use("/auth", authRouter);
router.use("/product", authMiddleware, productRouter);

export default router;
