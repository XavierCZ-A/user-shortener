import { errorMessage } from "./response";

export class CustomError extends Error {
  public statusCode: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  public responseData: any;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  constructor(statusCode: number, message: string, responseData?: any) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
    this.responseData = responseData || errorMessage(statusCode, message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}
