import type { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  res.status(200).send("Hello World");
};

export default index;
