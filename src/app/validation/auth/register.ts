import { ValidationChain, body } from "express-validator";

export default [
  body("name").isLength({ min: 1 }).withMessage("Name is required"),
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .notEmpty()
    .withMessage("Password must be at least 6 characters long"),
] as ValidationChain[];
