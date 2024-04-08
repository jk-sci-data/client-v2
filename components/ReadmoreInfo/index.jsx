import React from "react";
import BtnText22 from "../BtnText22";
import "./ReadmoreInfo.sass";

function ReadmoreInfo(props) {
  const { btnText21Props, btnText22Props, btnText23Props } = props;

  return (
    <div className="readmore_info">
      <div className="text-5 valign-text-middle notosanssc-normal-shark-16px">浏览</div>
      <div className="readmore_nav">
        <BtnText22>{btnText21Props.children}</BtnText22>
        <BtnText22>{btnText22Props.children}</BtnText22>
        <BtnText22>{btnText23Props.children}</BtnText22>
      </div>
    </div>
  );
}

export default ReadmoreInfo;
