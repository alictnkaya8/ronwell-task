import { ValidationChain, body } from "express-validator";

export default [
  body("name").isLength({ min: 1 }).withMessage("Name is required"),
  body("description")
    .isLength({ min: 1 })
    .withMessage("Description is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("inventory").isInt().withMessage("Inventory must be an integer"),
] as ValidationChain[];
