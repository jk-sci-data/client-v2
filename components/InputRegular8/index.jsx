import React from "react";
import InputBoxRegular3 from "../InputBoxRegular3";
import "./InputRegular8.sass";

function InputRegular8(props) {
  const { spanText2, inputBoxRegular3Props } = props;

  return (
    <div className="input_regular-8">
      <div className="input_subtitle_container-22">
        <div className="subtitle-34 notosanssc-normal-white-20px">
          <span className="notosanssc-normal-well-read-20px">*</span>
          <span className="notosanssc-normal-shark-20px">{spanText2}</span>
        </div>
      </div>
      <InputBoxRegular3 placeholder={inputBoxRegular3Props.placeholder} />
    </div>
  );
}

export default InputRegular8;
