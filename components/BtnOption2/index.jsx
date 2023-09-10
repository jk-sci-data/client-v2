import React from "react";
import "./BtnOption2.sass";

function BtnOption2(props) {
  const { children } = props;

  return (
    <div className="btn_option-1">
      <div className="text-135 valign-text-middle notosanssc-normal-white-16px">{children}</div>
    </div>
  );
}

export default BtnOption2;
