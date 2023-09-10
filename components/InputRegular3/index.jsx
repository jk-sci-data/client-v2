import React from "react";
import InputSubtitleContainer9 from "../InputSubtitleContainer9";
import InputBoxRegular4 from "../InputBoxRegular4";
import "./InputRegular3.sass";

function InputRegular3(props) {
  const { inputSubtitleContainer9Props, inputBoxRegular4Props } = props;

  return (
    <article className="input_regular-2">
      <InputSubtitleContainer9 spanText2={inputSubtitleContainer9Props.spanText2} />
      <InputBoxRegular4 text_Label={inputBoxRegular4Props.text_Label} />
    </article>
  );
}

export default InputRegular3;
