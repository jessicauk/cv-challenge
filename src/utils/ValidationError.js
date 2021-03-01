export class ValidationError extends Error {
  constructor(message) {
    super(message);
    if (ValidationError.instance) {
      return ValidationError.instance;
    }
    this.name = "ValidationError";
    this.message = message;
  }
}
