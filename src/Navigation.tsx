import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "./assets/logo.svg";

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <img src={logo} alt="Ribbon Finance logo" className="img-fluid" width={48} />
      </NavbarBrand>
    </Navbar>
  );
};

export default Navigation;
