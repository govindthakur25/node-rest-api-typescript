import CustomError from "./CustomError";
import type { ErrorCode } from "./types";

export default class EntityNotFoundError extends CustomError<ErrorCode> {}
