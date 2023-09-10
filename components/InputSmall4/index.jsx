import React from "react";
import InputSubtitleContainer42 from "../InputSubtitleContainer42";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall4.sass";

function InputSmall4(props) {
  const { inputSubtitleContainer4Props } = props;

  return (
    <div className="input_small-5">
      <InputSubtitleContainer42>{inputSubtitleContainer4Props.children}</InputSubtitleContainer42>
      <InputBoxSmall inputProps={props.inputProps}  />
    </div>
  );
}

export default InputSmall4;
