import React from "react";
import LogoContainer from "../LogoContainer";
import LoginInfo from "../AccountInfoBox";
import "./Header3.sass";

import { LoginContext } from "../../contexts";
import Login from "../Login";



function Header3(props) {
  const { logoContainerProps } = props;

  const { account, authorized } = React.useContext(LoginContext) || {};

  return (
    <header className="header-1" style={{ width: "100%" }}>
      <LogoContainer jK={logoContainerProps.jK} className={logoContainerProps.className} />
     　<LoginInfo/>
    </header>
  );
}

export default Header3;
