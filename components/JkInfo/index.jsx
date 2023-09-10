import React from "react";
import BtnText22 from "../BtnText22";
import "./JkInfo.sass";

function JkInfo(props) {
  const { btnText21Props, btnText22Props, btnText23Props, btnText24Props } = props;

  return (
    <div className="jk_info">
      <div className="text-4 valign-text-middle notosanssc-normal-shark-16px">百灵威集团</div>
      <div className="jk_nav">
        <BtnText22>{btnText21Props.children}</BtnText22>
        <BtnText22>{btnText22Props.children}</BtnText22>
        <BtnText22>{btnText23Props.children}</BtnText22>
        <BtnText22>{btnText24Props.children}</BtnText22>
      </div>
    </div>
  );
}

export default JkInfo;
