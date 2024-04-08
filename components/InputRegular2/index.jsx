import React from "react";
import InputSubtitleContainer9 from "../InputSubtitleContainer9";
import InputBoxRegular3 from "../InputBoxRegular3";
import "./InputRegular2.sass";

function InputRegular2(props) {
  const { inputSubtitleContainer9Props, inputBoxRegular2Props } = props;

  return (
    <article className="input_regular-1">
      <InputSubtitleContainer9 spanText2={inputSubtitleContainer9Props.spanText2} />
      <InputBoxRegular3 placeholder={inputBoxRegular2Props.placeholder} />
    </article>
  );
}

export default InputRegular2;
