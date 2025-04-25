// src/middleware/errorHandler.ts
import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../error/customError";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	console.error(`[Error] ${err.message}`, err);

	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({
			success: false,
			statusCode: err.statusCode,
			code: err.code || "ERROR",
			message: err.message,
			details: err.details,
		});
	}

	return res.status(500).json({
		success: false,
		code: "INTERNAL_ERROR",
		message: "Error interno del servidor",
		details: process.env.NODE_ENV === "development" ? err.message : undefined,
	});
};
