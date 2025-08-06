import type { NextFunction, Request, Response } from "express";
import { db } from "../db";
import { successData } from "../utils/response";
import bcrypt from "bcrypt";
import { CustomError } from "../utils/customError";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, lastName, email, password } = req.body;

  const existEmail = await db
    .selectFrom("users")
    .select("email")
    .where("email", "=", email)
    .execute();

  if (existEmail) {
    throw new CustomError(400, "Email already exist");
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await db
      .insertInto("users")
      .values({
        name: name,
        last_name: lastName,
        email: email,
        password: hashPassword,
      })
      .returning(["name", "last_name", "email"])
      .executeTakeFirst();

    res.json(successData(user));
  } catch (error) {
    next(error);
  }
};

export default registerUser;
