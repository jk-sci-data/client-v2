import React from "react";
import Header22 from "../Header22";
import LoginWiondow from "../LoginWiondow";
import Footer from "../Footer";
import "./Login.sass";

function Login(props) {
  const { header22Props, loginWiondowProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <Header22 logoContainerProps={header22Props?.logoContainerProps} />
        <LoginWiondow {...loginWiondowProps} />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Login;
