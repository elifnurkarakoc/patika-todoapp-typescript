import React from "react";
import { ErrorText } from "./Error.styled";
import { IErrorProps } from "../../types";

//PopUp Formik form validation error 
const Error: React.FC<IErrorProps> = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export default Error;
