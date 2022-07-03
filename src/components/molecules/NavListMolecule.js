import React from "react";
import AboutUsAtom from "../atoms/AboutUsAtom";
import HomeAtom from "../atoms/HomeAtom";
import RegisterAtom from "../atoms/RegisterAtom";

const NavListMolecule = () => {
  return (
    <React.Fragment>
      <HomeAtom />
      <RegisterAtom />
      <AboutUsAtom />
    </React.Fragment>
  );
};

export default NavListMolecule;
