import React from "react";
import BtnCheckbox3 from "../BtnCheckbox3";
import "./BtnOption5.sass";

function BtnOption5(props) {
  const { text174 } = props;

  return (
    <div className="btn_option-3">
      <div className="text-174 valign-text-middle notosanssc-normal-stiletto-16px">{text174}</div>
      <BtnCheckbox3 />
    </div>
  );
}

export default BtnOption5;
