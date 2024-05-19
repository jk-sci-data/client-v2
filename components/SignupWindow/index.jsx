import React, { useEffect, useState } from "react";
import InputBoxRegular42 from "../InputBoxRegular42";
import BtnText2 from "../BtnText2";
import Btn82 from "../Btn82";
import "./styles.sass";
import { useForm } from "react-hook-form";
import useLogin from "hooks/useLogin";

function SignupWindow(props) {
  const loginInfo = useLogin({ doAuthorize: false });
  const [errMsg, setErrMsg] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
      password2: "",
      email: "",
      phone_number: ""
    }
  });

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

  const onSubmit = (data) => {
    setErrMsg(null);
    const { username, password, password2, email, phone_number } = data;
    if (password !== password2) {
      setErrMsg("Passwords do not match");
      return;
    }
    loginInfo.handleSignUpAdmin(data);
  };

  const redirectLogin = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    const { success, method } = loginInfo.result || {};
    if (success && ["handleSignUp", "handleSignUpAdmin"].includes(method)) {
      redirectLogin();
    }
  }, [loginInfo.result]);

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input_container">
                    <InputBoxRegular42
                      icon_Regular="/img/component-1@2x.png"
                      inputPlaceholder="请输入邮箱"
                      {...register("username", { required: true })}
                    />
                    {errors.username && <span>This field is required</span>}
                    <InputBoxRegular42
                      icon_Regular="/img/component-1@2x.png"
                      inputPlaceholder="请输入邮箱"
                      inputType="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                    <InputBoxRegular42
                      icon_Regular="/img/component-1@2x.png"
                      inputPlaceholder="请输入电话"
                      inputType="tel"
                      {...register("phone_number")}
                    />
                    <InputBoxRegular42
                      icon_Regular={inputBoxRegular422Props.icon_Regular}
                      inputPlaceholder={inputBoxRegular422Props.inputPlaceholder}
                      inputType="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                    <InputBoxRegular42
                      icon_Regular="/img/component-1@2x.png"
                      inputPlaceholder="请再次输入密码"
                      inputType="password"
                      {...register("password2", { required: true })}
                    />
                    {errors.password2 && <span>This field is required</span>}
                    <div style={{ color: "red", fontSize: "80%", textAlign: "center", height: "1.6em" }}>
                      {errMsg}
                    </div>
                    <div className="input-btn_container" style={{ marginTop: "1.2em" }}>
                      <Btn82 type="submit" disabled={loginInfo?.loading ?? false}>
                        创建帐号
                      </Btn82>
                      <BtnText2 onClick={redirectLogin}>注册</BtnText2>
                    </div>
                  </div>
                </form>
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