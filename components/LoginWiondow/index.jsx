import React, { useContext, useEffect } from "react";
import InputBoxRegular42 from "../InputBoxRegular42";
import BtnCheckbox22 from "../BtnCheckbox22";
import BtnText from "../BtnText";
import Btn82 from "../Btn82";
import BtnText2 from "../BtnText2";
import "./LoginWiondow.sass";
import { AppContext } from "contexts";
import useForm from "hooks/useForm";
import useLogin from "hooks/useLogin";

function LoginWiondow(props) {
  const {loginInfo} = useContext(AppContext) ?? {};
  const form = useForm({ "username": "", "password": "" });
  const login = loginInfo ?? {}; //instance of useLogin()
  console.log("logininfo", login)
  const { account, loggedIn } = login;
  .0
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

  console.log("login formdata", form.data);

  const handleLoginClick = (evt) => {
    console.log("login clicked");
    evt.preventDefault();
    login.handleLogin(form.data /** {username, password} */);

  };

  useEffect(() => {
    if (loggedIn) {
      console.log("loggedIn!", loggedIn);
    }
    else {
      console.log("not loggedin", loggedIn);
    }
  }, [loggedIn])
  /**
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
   */


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="upper mt-5">
            <div className="text-7 valign-text-middle">{text7}</div>
            <div className="text-8 valign-text-middle">{text8}</div>
          </div>
          <div className="lower">
            <div className="lower_container">
              <div className="input-section_container">
                <div className="input_container">
                  <InputBoxRegular42
                    icon_Regular={inputBoxRegular421Props.icon_Regular}
                    inputPlaceholder={inputBoxRegular421Props.inputPlaceholder}
                    name={"username"}
                    form={form}
                  />
                  <InputBoxRegular42
                    icon_Regular={inputBoxRegular422Props.icon_Regular}
                    inputPlaceholder={inputBoxRegular422Props.inputPlaceholder}
                    inputType="password"
                    name="password"
                    form={form}
                  />
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
              <div className="input-btn_container mt-4">
                <Btn82>{btn82Props.children}</Btn82>
                <BtnText2>{btnText2Props.children}</BtnText2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="ofj-fk-pof-gh-h4es-m-wc-dj-kd0nj-1"
            src={ofjfkpofghh4Esmwcdjkd0Nj1}
            alt="OFJFkPofGhH4esMWcDJKd0nj 1"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginWiondow;
