import React from "react";
import "./InputSubtitleContainer8.sass";

function InputSubtitleContainer8(props) {
  const { spanText2 } = props;

  return (
    <div className="input_subtitle_container-16">
      <div className="subtitle-28 notosanssc-normal-white-20px">
        <span className="notosanssc-normal-well-read-20px">*</span>
        <span className="notosanssc-normal-shark-20px">{spanText2}</span>
      </div>
    </div>
  );
}

export default InputSubtitleContainer8;
