import React from "react";
import "./BtnText2.sass";

function BtnText2(props) {
  const { children } = props;

  return (
    <div className="btn_text-1">
      <div className="text_label valign-text-middle notosanssc-normal-granite-gray-16px">{children}</div>
    </div>
  );
}

export default BtnText2;
