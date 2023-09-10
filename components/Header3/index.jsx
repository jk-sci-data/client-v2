import React from "react";
import LogoContainer from "../LogoContainer";
import "./Header3.sass";

import { LoginContext } from "../../contexts";
import Login from "../Login";

function Header3(props) {
  const { username141, logoContainerProps } = props;

  const {account} = React.useContext(LoginContext) || {};

  return (
    <header className="header-1">
      <LogoContainer jK={logoContainerProps.jK} className={logoContainerProps.className} />
      <div className="username_container">
        <div className="username141 notosanssc-normal-black-16px">{account?.username || username141}</div>
        <img className="vector" src="/img/vector@2x.png" alt="Vector" />
      </div>
    </header>
  );
}

export default Header3;
