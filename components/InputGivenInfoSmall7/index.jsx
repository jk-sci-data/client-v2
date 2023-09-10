import React from "react";
import InputSubtitleContainer42 from "../InputSubtitleContainer42";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall7.sass";

function InputGivenInfoSmall7(props) {
  const { inputSubtitleContainer4Props, btnText7Props } = props;

  return (
    <article className="input_given-info_small-6">
      <InputSubtitleContainer42>{inputSubtitleContainer4Props.children}</InputSubtitleContainer42>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall7;
