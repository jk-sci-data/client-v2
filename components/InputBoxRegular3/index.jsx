import React from "react";
import "./InputBoxRegular3.sass";

function InputBoxRegular3(props) {
  const { placeholder } = props;

  return (
    <div className="input-box_regular-5">
      <div className="placeholder-5 valign-text-middle notosanssc-normal-quick-silver-20px">{placeholder}</div>
      <img className="expand_btn-1" src="/img/expandbox@2x.png" alt="expand_btn" />
    </div>
  );
}

export default InputBoxRegular3;
