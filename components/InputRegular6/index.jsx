import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular6.sass";

function InputRegular6(props) {
  const { inputSubtitleContainer2Props, inputBoxRegularProps } = props;

  return (
    <label className="input_regular-6">
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </label>
  );
}

export default InputRegular6;
