import { Router } from "express";
import { ProductController } from "@/app/controllers/productController";
import { create, update } from "@/app/validation/product/index";

const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.post("/", create, ProductController.create);
productRouter.get("/:id", ProductController.getProduct);
productRouter.put("/:id", update, ProductController.update);
productRouter.delete("/:id", ProductController.remove);

export default productRouter;
