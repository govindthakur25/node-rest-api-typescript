import CustomError from "./CustomError";

class EntityNotFoundError extends CustomError<"ERR_NF" | "ERR_VALID"> {}
export default EntityNotFoundError;
