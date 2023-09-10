import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall4.sass";

function InputGivenInfoSmall4(props) {
  const { inputSubtitleContainerProps, btnText7Props } = props;

  return (
    <article className="input_given-info_small-3">
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall4;
