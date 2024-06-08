import { Request, Response } from "express";
import { validationResult } from "express-validator";
import productService from "../services/productService";

export const ProductController = {
  async getAllProducts(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const products = await productService.findMany(req.query as any);
    res.send(products);
  },
  async getProduct(req: Request, res: Response) {
    const product = await productService.findOne(parseInt(req.params.id));
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send(product);
  },
  async create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const { name, description, price, inventory } = req.body;
    const product = await productService.create({
      name,
      description,
      price,
      inventory,
    });
    res.send(product);
  },
  async update(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const { name, description, price, inventory } = req.body;
    const result = await productService.update(parseInt(req.params.id), {
      name,
      description,
      price,
      inventory,
    });
    res.status(parseInt(result.status)).send({ message: result.message });
  },
  async remove(req: Request, res: Response) {
    const result = await productService.remove(parseInt(req.params.id));
    res.status(parseInt(result.status)).send({ message: result.message });
  },
};
