import React from "react";

const Checkbox = ({ checked, onChange, ...props }) => {
  return (
    <input type="checkbox" className="accent-blue-500" checked={checked} onChange={onChange} {...props} />
    );
}

export default Checkbox