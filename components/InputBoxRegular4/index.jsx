import React from "react";
import "./InputBoxRegular4.sass";

function InputBoxRegular4(props) {
  const { text_Label } = props;

  return (
    <div className="input-box_regular-6">
      <div className="placeholder-6 valign-text-middle notosanssc-normal-quick-silver-20px">必填</div>
      <div className="input_-unit-box">
        <div className="text_label-149 valign-text-middle notosanssc-normal-black-16px">{text_Label}</div>
      </div>
    </div>
  );
}

export default InputBoxRegular4;
