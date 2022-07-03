import React from "react";

const NavBarButton = ({ type }) => {
  return (
    <button
      type={type}
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="!#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {" "}
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default NavBarButton;
