//Main header used in MainApp
import React, { useEffect, useContext } from "react";
import LogoContainer from "../LogoContainer";
import "./Header3.sass";
import {useNavigate} from "react-router-dom";
import { AppContext } from "contexts";

function LoggedIn({ username, handleLogout }) {
  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", alignItems: "flex-end", marginRight: "0.5em" }}>
      <div className="username141 notosanssc-normal-black-16px" style={{ width: "8em" }}>
        <a onClick={() => {
          console.log("handleLogout called");
          handleLogout && handleLogout();
        }}>Logout</a>
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
  const { auth } = useContext(AppContext);
  const navigate = useNavigate();

  const { account, loading, handleLogout, logoutSuccess } = auth;


  useEffect(() => {
    console.log("account info", account);
  }, [account]);

  useEffect(() => {
    if (logoutSuccess === true)
      navigate("/login");
  }, [logoutSuccess]);

  return (
    <header className="header-1" style={{ width: "100%" }}>
      <LogoContainer jK={logoContainerProps.jK} className={logoContainerProps.className} />
      {
        (loading) ? "Authenticating..."
          : (account) ? <LoggedIn username={account?.username ?? "Unknown username"} handleLogout={handleLogout} />
            : <LoggedOut />
      }
    </header>
  );
}

export default Header3;
