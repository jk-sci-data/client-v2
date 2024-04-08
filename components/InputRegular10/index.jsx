import React from "react";
import InputSubtitleContainer10 from "../InputSubtitleContainer10";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular10.sass";

function InputRegular10(props) {
  const { inputSubtitleContainer10Props, inputBoxRegularProps } = props;

  return (
    <div className="input_regular-10">
      <InputSubtitleContainer10 spanText2={inputSubtitleContainer10Props.spanText2} />
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </div>
  );
}

export default InputRegular10;
