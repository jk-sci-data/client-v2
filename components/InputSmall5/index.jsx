import React from "react";
import InputSubtitleContainer52 from "../InputSubtitleContainer52";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall5.sass";

function InputSmall5(props) {
  return (
    <article className="input_small-6">
      <InputSubtitleContainer52 />
      <InputBoxSmall inputProps={props.inputProps}  />
    </article>
  );
}

export default InputSmall5;
