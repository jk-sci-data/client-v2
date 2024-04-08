import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall.sass";

function InputSmall(props) {
  const { className, inputSubtitleContainerProps } = props;

  return (
    <article className={`input_small-1 ${className || ""}`}>
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <InputBoxSmall />
    </article>
  );
}

export default InputSmall;
