import React from "react";

const InputAtom = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-control me-2"
    />
  );
};

export default InputAtom;
