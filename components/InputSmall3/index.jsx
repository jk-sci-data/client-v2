import React from "react";
import InputSubtitleContainer3 from "../InputSubtitleContainer3";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall3.sass";

function InputSmall3(props) {
  const { inputSubtitleContainer3Props } = props;

  return (
    <article className="input_small-4">
      <InputSubtitleContainer3>{inputSubtitleContainer3Props.children}</InputSubtitleContainer3>
      <InputBoxSmall  inputProps={props.inputProps} />
    </article>
  );
}

export default InputSmall3;
