import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import logo from "../static/images/logo.svg";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Navigation = () => {

  const [address, setAddress] = useState('Address');
  const [buttonText, setButtonText] = useState('Connect Metamask');

  const connect = () => {
    if (!window.ethereum) {
      return;
    }

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        console.log(accounts);
        updateSection(accounts[0]);
        setAddress(accounts[0]);
        setButtonText('Connected');
      })
      .catch((err: Error) => {
        // TO DO: Handle error
        console.error(err);
        return err;
      });
  };

  const updateSection = (accounts: any) => {
    const addressLogged = document.getElementById('addressLogged');
    const addressSection = document.getElementById('addressSection');
    const connectedAddress = document.getElementById('connectedAddress');
    if (addressLogged !== null && addressSection !== null && connectedAddress !== null) {
      addressLogged.innerText = accounts || 'None';
      addressSection.style.display = 'inline';
      connectedAddress.style.display = 'inline';
    }
  }

  return (
    <Navbar className="container d-flex" expand>
      <NavbarBrand className="mr-auto p-2" href="/">
        <img
          src={logo}
          alt="Ribbon Finance logo"
          className="img-fluid"
          width={48}
        />
      </NavbarBrand>
      
      <div className="p-2 address-section d-flex" id="addressSection">
        <div className="connected-address" id="connectedAddress"></div>
        <div className="address-text" id="addressLogged">{address}</div>
      </div>
      <Button className="p-2" color="primary" onClick={connect}>
        {buttonText}
      </Button>
    </Navbar>
  );
};

export default Navigation;
