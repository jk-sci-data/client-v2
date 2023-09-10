import React from "react";
import InputSubtitleContainer6 from "../InputSubtitleContainer6";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall10.sass";

function InputGivenInfoSmall10(props) {
  const { inputSubtitleContainer6Props, btnText7Props } = props;

  return (
    <article className="input_given-info_small-9">
      <InputSubtitleContainer6>{inputSubtitleContainer6Props.children}</InputSubtitleContainer6>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall10;
