import React from "react";
import InputSubtitleContainer8 from "../InputSubtitleContainer8";
import InputBoxRegular from "../InputBoxRegular";
import "./InputRegular.sass";

function InputRegular(props) {
  const { inputSubtitleContainer8Props, inputBoxRegularProps } = props;

  return (
    <article className="input_regular">
      <InputSubtitleContainer8 spanText2={inputSubtitleContainer8Props.spanText2} />
      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
    </article>
  );
}

export default InputRegular;
