import React from "react";

/* Styles */
import { HeaderWebMotors } from "./styles";

/* Images */
import logo from "../../Assets/global/logo/webmotors.svg";

const Header = () => {
  return (
    <HeaderWebMotors>
      <div>
        <img src={logo} alt="Logo Webmotors" />
      </div>
    </HeaderWebMotors>
  );
};
export default Header;
