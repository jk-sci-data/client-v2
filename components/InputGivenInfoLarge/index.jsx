import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoLarge.sass";

function InputGivenInfoLarge(props) {
  const { inputSubtitleContainerProps, btnText7Props } = props;

  return (
    <div className="input_given-info_large-1">
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <BtnText72 className={btnText7Props.className}>{btnText7Props.children}</BtnText72>
    </div>
  );
}

export default InputGivenInfoLarge;
