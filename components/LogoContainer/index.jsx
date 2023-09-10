import React from "react";
import "./LogoContainer.sass";

function LogoContainer(props) {
  const { jK, className } = props;

  return (
    <div className={`logo_container ${className || ""}`}>
      <div className="group-8659">
        <div className="logobox">
          <img className="jk_logo" src={jK} alt="j&amp;k_logo" />
        </div>
      </div>
      <h1 className="text-1 valign-text-middle notosanssc-bold-black-26px">百灵威供应商平台</h1>
    </div>
  );
}

export default LogoContainer;
