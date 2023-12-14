// BubbleBox component
import React from 'react';
import "./BubbleBox.sass";
import bubble from "../../dist/img/bubble.png";

const BubbleBox = ({ bubbleContent }) => {
  return (
      <div className="bubble-box">
        <img src={bubble} alt="bubble" />
        <div className="bubble-content">{bubbleContent}</div>
      </div>
  );
};

export default BubbleBox;

