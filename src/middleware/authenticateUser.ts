import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError";
import config from "../config";

const authenticateUser = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new AuthenticationError({
        message: "Authorization header is missing or malformed",
        code: "ERR_AUTH",
        statusCode: 401,
      });
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, config.appSecret) as JwtPayload;
    if (!decodedToken) {
      throw new AuthenticationError({
        message: "Invalid token",
        code: "ERR_AUTH",
        statusCode: 403,
      });
    }
    // Attach the decoded token to the request object for further use
    request.auth = { payload: decodedToken, token };
    next();
  } catch (error) {
    next(
      new AuthenticationError({
        message: "Invalid token",
        code: "ERR_AUTH",
        statusCode: 403,
      }),
    );
  }
};
export default authenticateUser;
