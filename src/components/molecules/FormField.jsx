import React from "react";
import Input from "../atoms/Input";
import ErrorMessage from "../atoms/ErrorMessage";

const FormField = ({label,type = "text",placeholder,error, register, ...props}) => (
  <div>
    {label && <label className="text-sm font-medium">{label}</label>}
    <Input type={type} placeholder={placeholder} {...register} {...props} />
    <ErrorMessage message={error} />
  </div>
);

export default FormField;
