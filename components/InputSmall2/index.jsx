import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall2.sass";

function InputSmall2(props) {
  const { className, inputSubtitleContainer2Props } = props;

  return (
    <article className={`input_small-3 ${className || ""}`}>
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <InputBoxSmall inputProps={props.inputProps} />
    </article>
  );
}

export default InputSmall2;
