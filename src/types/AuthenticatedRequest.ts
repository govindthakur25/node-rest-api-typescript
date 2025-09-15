import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  auth?: {
    payload: JwtPayload;
    token: string;
  };
}
