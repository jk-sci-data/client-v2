import React from "react";
import LogoContainer from "../LogoContainer";
import "./Header3.sass";

import { LoginContext } from "../../contexts";
import Login from "../Login";

function LoggedIn({ username }) {
  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: "flex-end", marginRight: "0.5em" }}>
      <div className="username141 notosanssc-normal-black-16px" style={{ width: "8em" }}>
        {"Logout"}
      </div>
      <div className="username141 notosanssc-normal-black-16px" style={{ width: "15em" }}>
        {username}
      </div>
      <img className="vector" src="/img/vector@2x.png" alt="Vector" />
    </div>);
}

function LoggedOut() {
  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: "flex-end", marginRight: "0.5em" }}>
      <div className="username141 notosanssc-normal-black-16px">
        {"Not logged in"}
      </div>
    </div>
  );
}

function Header3(props) {
  const { logoContainerProps } = props;

  const { account, authorized } = React.useContext(LoginContext) || {};

  return (
    <header className="header-1" style={{ width: "100%" }}>
      <LogoContainer jK={logoContainerProps.jK} className={logoContainerProps.className} />
      {(authorized) ? <LoggedIn username={account?.username ?? "Unknown username"} />
        : (authorized === false) ? <LoggedOut />
          : "Authenticating..."
      }
    </header>
  );
}

export default Header3;
