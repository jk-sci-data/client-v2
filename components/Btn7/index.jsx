import React from "react";
import "./Btn7.sass";

function Btn7(props) {
  return (
    <button className="btn-29" onClick={props.onClick || (() => {})}>
      <div className="text_label-128 valign-text-middle notosanssc-medium-granite-gray-16px">返回</div>
    </button>
  );
}

export default Btn7;
