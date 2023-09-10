import React from "react";
import InputSubtitleContainer7 from "../InputSubtitleContainer7";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall7.sass";

function InputSmall7(props) {
  const { inputSubtitleContainer7Props } = props;

  return (
    <article className="input_small-8">
      <InputSubtitleContainer7>{inputSubtitleContainer7Props.children}</InputSubtitleContainer7>
      <InputBoxSmall inputProps={props.inputProps} />
    </article>
  );
}

export default InputSmall7;
