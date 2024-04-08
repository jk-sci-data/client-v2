import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular6.sass";

function InputRegular6(props) {
  const { inputSubtitleContainer2Props, inputBoxRegularProps } = props;

  return (
    <div className="input_regular-6">
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </div>
  );
}

export default InputRegular6;
