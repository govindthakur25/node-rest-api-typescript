import CustomError from "./CustomError";
import type { ErrorCode } from "./types";

export default class AuthenticationError extends CustomError<ErrorCode> {}
