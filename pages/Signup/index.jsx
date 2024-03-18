import React from "react";
import Header22 from "components/Header22";
import Footer from "components/Footer";
import "./styles.sass";
import SignupWindow from "components/SignupWindow";

function Signup(props) {
  const { header22Props, loginWiondowProps, footerProps } = props;

  return (
    <div className="container-center-horizontal" style={{height:"fit-content", width:"100%"}}>
      <div className="login screen" style={{width:"100%", display:"flex", flexFlow:"column nowrap", justifyContent:"space-between", height:"100vh"}}>
        <Header22 logoContainerProps={header22Props?.logoContainerProps} />
        <SignupWindow {...loginWiondowProps} />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Signup;
