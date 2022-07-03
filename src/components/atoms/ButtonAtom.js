import React from "react";

const ButtonAtom = (props) => {
  const { type } = props;
  return (
    <button type={type} className="btn btn-outline-success">
      Search
    </button>
  );
};

export default ButtonAtom;
