export const errorMessage = (status, message, err) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  error.detail = err?.message;
  return error;
};
