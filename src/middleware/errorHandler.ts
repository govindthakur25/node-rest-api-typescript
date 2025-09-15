import { Request, Response, NextFunction } from "express";
import config from "../config";
import { getErrorMessage } from "../utils";
import CustomError from "../errors/CustomError";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || config.debug) {
    next(error);
    return;
  }
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: "code" in error ? error.code : "ERR_AUTH",
      },
    });
  }

  res.status(statusCode).json({
    error: {
      message: getErrorMessage(error),
    },
  });
}
