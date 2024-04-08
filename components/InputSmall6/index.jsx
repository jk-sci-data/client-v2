import React from "react";
import InputSubtitleContainer6 from "../InputSubtitleContainer6";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall6.sass";

function InputSmall6(props) {
  const { inputSubtitleContainer6Props } = props;

  return (
    <article className="input_small-7">
      <InputSubtitleContainer6>{inputSubtitleContainer6Props.children}</InputSubtitleContainer6>
      <InputBoxSmall inputProps={props.inputProps} />
    </article>
  );
}

export default InputSmall6;
