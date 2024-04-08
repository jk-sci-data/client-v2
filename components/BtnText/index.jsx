import React from "react";
import "./BtnText.sass";

function BtnText(props) {
  const { children } = props;

  return (
    <div className="btn_text">
      <div className="text-9 valign-text-middle notosanssc-normal-stiletto-16px">{children}</div>
    </div>
  );
}

export default BtnText;
