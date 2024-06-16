import React from "react";
import Header22 from "components/Header22";
import LoginWiondow from "components/LoginWiondow";
import Footer from "components/Footer";
import "./Login.sass";

function Login(props) {
  const { header22Props, loginWiondowProps, footerProps } = props;

  const onLoginSuccess = () => {
    //redirect to /account-info
  };

  return (
    <div className="container-center-horizontal" style={{height:"fit-content", width:"100%"}}>
      <div className="login screen" style={{width:"100%", display:"flex", flexFlow:"column nowrap", justifyContent:"space-between", height:"100vh"}}>
        <Header22 logoContainerProps={header22Props?.logoContainerProps} />
        <LoginWiondow {...loginWiondowProps} />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Login;
