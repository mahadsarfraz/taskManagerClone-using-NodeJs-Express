class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (err, statusCode) => {
  return new CustomError(err, statusCode);
};

module.exports = { createCustomError, CustomError };
