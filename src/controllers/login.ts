import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db";
import { CustomError } from "../utils/customError";
import { config } from "../config/config";
import { successData } from "../utils/response";

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const [user] = await db
    .selectFrom("users")
    .select(["users.id", "users.name", "users.email", "users.password"])
    .where("email", "=", email)
    .execute();

  if (!user) {
    throw new CustomError(400, "email or password incorrect");
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new CustomError(400, "email or password incorrect");
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json(successData({ name: user.name, token: token }));
  } catch (error) {
    next(error);
  }
};

export default login;
