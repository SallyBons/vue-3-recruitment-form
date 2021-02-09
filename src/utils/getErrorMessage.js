import { translateFunction } from "./translateFunction";

const getErrorMessage = errors => {
  let message = "";

  errors.forEach(error => {
    message = error.$message;
  });
  return translateFunction(message);
};
export { getErrorMessage };
