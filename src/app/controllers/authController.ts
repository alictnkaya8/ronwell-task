import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import userService from "../services/userService";

export const AuthController = {
  async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await userService.find({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }
    const user = await userService.create({
      name,
      email,
      password: hashedPassword,
    });
    res.send(user);
  },
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userService.find({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.send({ token });
  },
  async me(req: Request, res: Response) {
    res.send(req.user);
  },
};
