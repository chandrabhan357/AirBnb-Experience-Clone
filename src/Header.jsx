import React from "react";
import ReactLogo from "./assets/react.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img src={ReactLogo} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
