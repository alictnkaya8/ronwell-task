import { ValidationChain, body } from "express-validator";

export default [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .notEmpty()
    .withMessage("Password must be at least 6 characters long"),
] as ValidationChain[];
