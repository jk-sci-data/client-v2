import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import InputBoxSmall from "../InputBoxSmall";
import "./InputLarge.sass";

function InputLarge(props) {
  const { inputSubtitleContainerProps, inputSubtitleContainerProps2 } = props;

  return (
    <div className="input_large">
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <InputBoxSmall className={inputSubtitleContainerProps2.className}  />
    </div>
  );
}

export default InputLarge;
