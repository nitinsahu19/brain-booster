import React from "react";

  const Button = ({ children, ...props }) => {
  return (
    <button className="w-full bg-blue-600 text-white py-2 rounded-md"{...props}>{children}</button>
  )
}

export default Button
