import React from "react";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular9.sass";

function InputRegular9(props) {
  const { spanText1, spanText2, inputBoxRegularProps } = props;

  return (
    <div className="input_regular-9">
      <div className="input_subtitle_container-23">
        <div className="subtitle-35 notosanssc-normal-white-20px">
          <span className="notosanssc-normal-well-read-20px">{spanText1}</span>
          <span className="notosanssc-normal-shark-20px">{spanText2}</span>
        </div>
      </div>
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </div>
  );
}

export default InputRegular9;
