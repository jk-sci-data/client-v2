import React from "react";
import InputSubtitleContainer3 from "../InputSubtitleContainer3";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall8.sass";

function InputGivenInfoSmall8(props) {
  const { inputSubtitleContainer3Props, btnText7Props } = props;

  return (
    <article className="input_given-info_small-7">
      <InputSubtitleContainer3>{inputSubtitleContainer3Props.children}</InputSubtitleContainer3>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall8;
