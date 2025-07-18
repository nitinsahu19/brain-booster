import React from "react";

const  IconButton = ({ children, ...props }) => {
  return (
    <button className="p-2 border rounded-md" {...props}> {children} </button>
  );
}

export default IconButton