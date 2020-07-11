import React from "react";

/* Styles */
import { HeaderWebMotors } from "./styles";

/* Images */
import logo from "../../Assets/global/logo/webmotors.svg";

const Header = () => {
  return (
    <HeaderWebMotors className="wm-header">
      <div className="wm-header__logo">
        <img src={logo} alt="Logo Webmotors" className="wm-header__logo-img" />
      </div>
    </HeaderWebMotors>
  );
};
export default Header;
