import { Request, Response, NextFunction } from "express";
import config from "../config";
import { getErrorMessage } from "../utils";

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

  res.status(statusCode).json({
    error: {
      message: getErrorMessage(error),
    },
  });
}
