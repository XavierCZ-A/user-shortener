import type { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  res.status(200).send("Hello World");
};

export default registerUser;
