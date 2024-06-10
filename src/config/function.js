export const extractErrorMessage = (
  error,
  defaultMessage = "Please try again"
) => {
  console.log(error.response.data.message);
  if (!error) {
    return "";
  } else if (typeof error === "string") {
    return error;
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    return error.response.data.message;
  } else {
    if (
      error &&
      error.data &&
      error.data.errors &&
      Object.keys(error.data.errors).length
    ) {
      return error.data.errors[Object.keys(error.data.errors)[0]];
    } else if (error && error.data && error.data.msg) {
      return error.data.msg;
    } else if (error && error.msg) {
      return error.msg;
    } else {
      return defaultMessage;
    }
  }
};
