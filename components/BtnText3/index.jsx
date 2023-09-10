import React from "react";
import "./BtnText3.sass";

function BtnText3(props) {
  const { children } = props;

  return (
    <div className="btn_text-27">
      <div className="text_label-140 valign-text-middle notosanssc-normal-stiletto-16px">{children}</div>
    </div>
  );
}

export default BtnText3;
