import React from "react";
import NavBarButton from "../atoms/NavBarButton";
import InputMolecule from "../molecules/InputMolecule";
import NavListMolecule from "../molecules/NavListMolecule";

const NavList = (props) => {
  const { brand } = props;
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href="!#">
        {brand}
      </a>
      <NavBarButton />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavListMolecule />
        </ul>
        <form className="d-flex">
          <InputMolecule type="input" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};
NavList.defaultProps = {
  brand: "Student Portal",
};

export default NavList;
