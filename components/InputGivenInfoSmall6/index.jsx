import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall6.sass";

function InputGivenInfoSmall6(props) {
  const { inputSubtitleContainer2Props, btnText7Props } = props;

  return (
    <article className="input_given-info_small-5">
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall6;
