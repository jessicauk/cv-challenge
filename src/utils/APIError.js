export class APIError extends Error {
  constructor(message) {
    super(message);
    if (APIError.instance) {
      return APIError.instance;
    }
    this.name = "APIError";
    this.message = message;
  }
}
