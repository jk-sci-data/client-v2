import React from "react";
import InputSubtitleContainer8 from "../InputSubtitleContainer8";
import InputBoxRegular4 from "../InputBoxRegular4";
import "./InputRegular4.sass";

function InputRegular4(props) {
  const { inputSubtitleContainer8Props, inputBoxRegular4Props } = props;

  return (
    <article className="input_regular-3">
      <InputSubtitleContainer8 spanText2={inputSubtitleContainer8Props.spanText2} />
      <InputBoxRegular4 text_Label={inputBoxRegular4Props.text_Label} />
    </article>
  );
}

export default InputRegular4;
