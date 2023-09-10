import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import BtnText62 from "../BtnText62";
import "./InputGivenInfoSmall.sass";

function InputGivenInfoSmall(props) {
  const { inputSubtitleContainerProps, btnText6Props } = props;

  return (
    <article className="input_given-info_small">
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <BtnText62>{btnText6Props.children}</BtnText62>
    </article>
  );
}

export default InputGivenInfoSmall;
