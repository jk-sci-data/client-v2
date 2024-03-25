import React, { useContext, useEffect, useState } from "react";
import InputBoxRegular42 from "../InputBoxRegular42";
import BtnCheckbox22 from "../BtnCheckbox22";
import BtnText from "../BtnText";
import Btn82 from "../Btn82";
import BtnText2 from "../BtnText2";
import "./styles.sass";
import { AppContext } from "contexts";
import useForm from "hooks/useForm";
import useLogin from "hooks/useLogin";

/** todo: user must be logged out to see this */
function SignupWindow(props) {
  //const { loginInfo, navigate } = useContext(AppContext) ?? {};
  const loginInfo = useLogin({doAuthoize:false});
  const [errMsg, setErrMsg] = useState(null);

  const form = useForm({
    "username": "",
    "password": "",
    "password2": "",
    "email": "",
    "phone_number": ""
  });
  console.log("loginINfo", loginInfo);
  
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

  const validate = () => {
    const {username, password, password2, email, phone_number} = form.data || {};
    for (let k of [username, password, email]) {
      /** todo: check for validity */
      if (!k)
        throw new Error("Missing required fields");
    }
    if (password !== password2) {
      throw new Error("Passwords do not match");
    }
    return true;
  };

  const redirectLogin = () => {
    window.location.href = "/login";
  }

  const handleSignupClick = (evt) => {
    setErrMsg(null);
    try {
      validate();
      evt.preventDefault();
      loginInfo.handleSignUpAdmin(form.data /** {username, password} */);
    } catch(err) {
      setErrMsg(err.message ?? err);
    }

  };

  useEffect(() => {
    const {success, method} = loginInfo.result || {};
    console.info("login result", loginInfo.result);
    if (!success)
      return;

    if (["handleSignUp", "handleSignUpAdmin"].includes(method)) {
      redirectLogin();
    } else {
      console.error("redirect failed", method);
    }

  }, [loginInfo.result])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="upper">
            <div className="text-7 valign-text-middle">账号注册</div>
            <div className="text-8 valign-text-middle">{text8}</div>
          </div>
          <div className="lower">
            <div className="lower_container">
              <div className="input-section_container">
                <div className="input_container">
                  <InputBoxRegular42
                    icon_Regular={"/img/component-1@2x.png" /*inputBoxRegular421Props.icon_Regular*/}
                    inputPlaceholder={"请输入邮箱" /*inputBoxRegular421Props.inputPlaceholder*/}
                    name="username"
                    form={form}
                    required
                  />
                  <InputBoxRegular42
                    icon_Regular={"/img/component-1@2x.png" /*inputBoxRegular421Props.icon_Regular*/}
                    inputPlaceholder={"请输入邮箱" /*inputBoxRegular421Props.inputPlaceholder*/}
                    inputType="email"
                    name="email"
                    form={form}
                    required
                  />
                  <InputBoxRegular42
                    icon_Regular={"/img/component-1@2x.png" /*inputBoxRegular421Props.icon_Regular*/}
                    inputPlaceholder={"请输入电话" /*inputBoxRegular421Props.inputPlaceholder*/}
                    inputType="tel"
                    name="phone_number"
                    form={form}
                  />
                  <InputBoxRegular42
                    icon_Regular={inputBoxRegular422Props.icon_Regular}
                    inputPlaceholder={inputBoxRegular422Props.inputPlaceholder}
                    inputType="password"
                    name="password"
                    form={form}
                    required
                  />
                  <InputBoxRegular42
                    icon_Regular={"/img/component-1@2x.png"}
                    inputPlaceholder={"请再次输入密码"}
                    inputType="password"
                    name="password2"
                    form={form}
                    required
                  />
                  <div style={{color:"red", fontSize:"80%", textAlign:"center", height:"1.6em"}}>
                    {errMsg}
                  </div>
                  <div className="input-btn_container" style={{"marginTop": "1.2em"}}>
                    <Btn82 onClick={handleSignupClick} disabled={loginInfo?.loading ?? false}>{"创建帐号"}</Btn82>
                    <BtnText2 onClick={redirectLogin}>{"注册"}</BtnText2>
                  </div>
                </div>
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

export default SignupWindow;
