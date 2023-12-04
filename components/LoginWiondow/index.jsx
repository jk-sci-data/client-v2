import React, {useContext} from "react";
import InputBoxRegular42 from "../InputBoxRegular42";
import BtnCheckbox22 from "../BtnCheckbox22";
import BtnText from "../BtnText";
import Btn82 from "../Btn82";
import BtnText2 from "../BtnText2";
import "./LoginWiondow.sass";

import { LoginContext, FormContext, InputProvider } from "contexts";

function LoginWiondow(props) {
  const { handleLogin, handleSignUp } = useContext(LoginContext) || {};
  const { formData } = useContext(FormContext) || {};

  
  const {
    text7,
    text8,
    text10,
    ofjfkpofghh4Esmwcdjkd0Nj1,
    inputBoxRegular421Props,
    inputBoxRegular422Props,
    btnTextProps,
    btn82Props,
    btnText2Props,
  } = props;

  const handleLoginClick = (evt) => {
    console.log("login clicked");
    evt.preventDefault();

    const { username, password } = formData;
    handleLogin(username, password).then((success) => {
      if (!success)
        return;
      
      // const redirectedFrom = sessionStorage.getItem('redirectedFrom');
      // sessionStorage.removeItem('redirectedFrom');
      // window.location.href = redirectedFrom || '/';
    });
  }


  return ( 
    <div className="login-wiondow">
      <div className="login_container">
        <div className="upper">
          <div className="text-7 valign-text-middle">{text7}</div>
          <div className="text-8 valign-text-middle">{text8}</div>
        </div>
        <div className="lower">
          <div className="lower_container">
            <div className="input-section_container">
              <div className="input_container">
                <InputProvider value={{ name: "username", value: formData?.username || "" }}>
                  <InputBoxRegular42
                    icon_Regular={inputBoxRegular421Props.icon_Regular}
                    inputPlaceholder={inputBoxRegular421Props.inputPlaceholder}
                  />
                </InputProvider>
                <InputProvider value={{ name: "password", value: formData?.password || "" }}>
                  <InputBoxRegular42
                    icon_Regular={inputBoxRegular422Props.icon_Regular}
                    inputPlaceholder={inputBoxRegular422Props.inputPlaceholder}
                    inputType="password"
                  />
                </InputProvider>
              </div>
              <div className="password-option_container">
                <div className="forget-password">
                  <BtnCheckbox22 />
                  <BtnText>{btnTextProps.children}</BtnText>
                </div>
                <div className="text-button">
                  <div className="text-10 valign-text-middle notosanssc-normal-granite-gray-16px">{text10}</div>
                </div>
              </div>
            </div>
            <div className="input-btn_container">
              <Btn82 onClick={handleLoginClick}>{btn82Props.children}</Btn82>
              <BtnText2>{btnText2Props.children}</BtnText2>
            </div>
          </div>
        </div>
      </div>
      <img
        className="ofj-fk-pof-gh-h4es-m-wc-dj-kd0nj-1"
        src={ofjfkpofghh4Esmwcdjkd0Nj1}
        alt="OFJFkPofGhH4esMWcDJKd0nj 1"
      />
      
    </div>
  );
}

export default LoginWiondow;
