class CustomError<T extends string> extends Error {
  message: string;
  statusCode: number;
  code: T;

  constructor(message: string, statusCode: number, code: T) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

export default CustomError;
