import React from "react";

const Input = ({ type = "text", placeholder, value, onChange, ...props }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}className="w-full px-4 py-2 border rounded-md outline-none"{...props}/>
  );
}

export default Input