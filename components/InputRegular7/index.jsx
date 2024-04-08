import React from "react";
import InputSubtitleContainer10 from "../InputSubtitleContainer10";
import InputBoxRegular3 from "../InputBoxRegular3";
import "./InputRegular7.sass";

function InputRegular7(props) {
  const { inputSubtitleContainer10Props, inputBoxRegular3Props } = props;

  return (
    <div className="input_regular-7">
      <InputSubtitleContainer10 spanText2={inputSubtitleContainer10Props.spanText2} />
      <InputBoxRegular3 placeholder={inputBoxRegular3Props.placeholder} />
    </div>
  );
}

export default InputRegular7;
