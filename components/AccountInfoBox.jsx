import React, { useState } from 'react';
import AccordionSection from "./AccountInfoBoxDropdown";
import IconUser from "../dist/img/icon_user.png";
import IconClose from "../dist/img/icon_close.png";
import IconLogout from "../dist/img/icon_logout.png";



const LoginInfo = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const showLoginBox = () => {
    setLoginOpen(true);
  };

  const closeLoginBox = () => {
    setLoginOpen(false);
  };



  return (
    <div className="login-area">
      {/* Your login button */}
      <button onClick={showLoginBox}>
      Username141... <img src={IconUser} alt="User" />
      </button>

      {/* Login box */}
      {isLoginOpen && (
        <div id="login-box">
          {/* Close button inside the login box */}
          <button className="closed" onClick={closeLoginBox}>
            <img src={IconClose} alt="close" />
          </button>
          <div className='top-area'>您好！<br></br>Username141...<br></br>
            <a href='#'>管理账号信息</a>
          </div>
          
         < AccordionSection/>

          
          <div className='login-out'>
          <img src={IconLogout} alt="login-out" /> 登出
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginInfo;
