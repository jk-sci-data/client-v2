import React from "react";
import InputSubtitleContainer52 from "../InputSubtitleContainer52";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall5.sass";

function InputGivenInfoSmall5(props) {
  const { btnText7Props } = props;

  return (
    <article className="input_given-info_small-4">
      <InputSubtitleContainer52 />
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall5;
