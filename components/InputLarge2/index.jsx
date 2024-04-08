import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import InputBoxSmall from "../InputBoxSmall";
import "./InputLarge2.sass";

function InputLarge2(props) {
  const { inputSubtitleContainer2Props, inputSubtitleContainer2Props2 } = props;

  return (
    <div className="input_large-1">
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <InputBoxSmall className={inputSubtitleContainer2Props2.className} />
    </div>
  );
}

export default InputLarge2;
