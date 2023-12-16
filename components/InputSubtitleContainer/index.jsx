
import React from "react";
import "./InputSubtitleContainer.sass";
import "../BubbleBox/BubbleBox.sass";
import bubble from "../../dist/img/bubble.png";

function InputSubtitleContainer(props) {
  const { children, bubbleContent } = props;

  return (
    <div className="input_subtitle_container">
      <div className="subtitle notosanssc-normal-shark-20px">{children}</div>

      <div className="bubble-box">
        <img src={bubble} alt="bubble" />
        <div className="bubble-content">{bubbleContent}</div>
      </div>
    </div>
  );
}

export default InputSubtitleContainer;
