//Main header used in MainApp
import React, { useContext } from "react";
import LogoContainer from "../LogoContainer";
import "./Header3.sass";

import { AppContext } from "../../contexts";
import useAuth from "hooks/useAuth";

function LoggedIn({ username }) {
  //const {handleLogout} = useAuth();

  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: "flex-end", marginRight: "0.5em" }}>
      <div className="username141 notosanssc-normal-black-16px" style={{ width: "8em" }}>
        <a onClick={() => {console.log("handleLogout")}}>Logout</a>
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
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

function Header3(props) {
  const { logoContainerProps } = props;
  const { account, loggedIn, loading } = {} //useAuth({doAuthorize:true});

  return (
    <header className="header-1" style={{ width: "100%" }}>
      <LogoContainer jK={logoContainerProps.jK} className={logoContainerProps.className} />
      {
        (loading) ? "Authenticating..."
        : (loggedIn) ? <LoggedIn username={account?.username ?? "Unknown username"} />
        : <LoggedOut />
      }
    </header>
  );
}

export default Header3;
