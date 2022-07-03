import React from "react";
import InputAtom from "../atoms/InputAtom";
import ButtonAtom from "../atoms/ButtonAtom";

const InputMolecule = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <InputAtom type={type} placeholder={placeholder} />
      <ButtonAtom type={type} />
    </React.Fragment>
  );
};
export default InputMolecule;
