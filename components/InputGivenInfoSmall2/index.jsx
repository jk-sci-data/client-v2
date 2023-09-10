import React from "react";
import InputSubtitleContainer42 from "../InputSubtitleContainer42";
import BtnText62 from "../BtnText62";
import "./InputGivenInfoSmall2.sass";

function InputGivenInfoSmall2(props) {
  const { inputSubtitleContainer4Props, btnText6Props } = props;

  return (
    <article className="input_given-info_small-1">
      <InputSubtitleContainer42>{inputSubtitleContainer4Props.children}</InputSubtitleContainer42>
      <BtnText62>{btnText6Props.children}</BtnText62>
    </article>
  );
}

export default InputGivenInfoSmall2;
