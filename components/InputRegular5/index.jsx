import React from "react";
import InputSubtitleContainer9 from "../InputSubtitleContainer9";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular5.sass";

function InputRegular5(props) {
  const { inputSubtitleContainer9Props, inputBoxRegularProps } = props;

  return (
    <label className="input_regular-4">
      <InputSubtitleContainer9 spanText2={inputSubtitleContainer9Props.spanText2} />
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </label>
  );
}

export default InputRegular5;
