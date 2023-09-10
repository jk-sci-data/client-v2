import React from "react";
import "./InputSubtitleContainer.sass";

function InputSubtitleContainer(props) {
  const { children } = props;

  return (
    <div className="input_subtitle_container">
      <div className="subtitle notosanssc-normal-shark-20px">{children}</div>
    </div>
  );
}

export default InputSubtitleContainer;
