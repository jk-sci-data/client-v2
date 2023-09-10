import React from "react";
import "./BtnOption3.sass";

function BtnOption3(props) {
  const { children } = props;

  return (
    <div className="btn_option-2">
      <div className="text_label-146 valign-text-middle notosanssc-normal-tundora-16px">{children}</div>
    </div>
  );
}

export default BtnOption3;
