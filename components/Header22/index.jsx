import React from "react";
import LogoContainer from "../LogoContainer";
import "./Header22.sass";

function Header22(props) {
  const { logoContainerProps } = props;

  return (
    <header className="header">
      <LogoContainer jK={logoContainerProps?.jK} />
    </header>
  );
}

export default Header22;
