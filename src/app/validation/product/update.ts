import { ValidationChain, body } from "express-validator";

export default [
  body("name"),
  body("description"),
  body("price"),
  body("inventory"),
] as ValidationChain[];
