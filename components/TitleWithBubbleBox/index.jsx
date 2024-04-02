// TitleWithBubbleBox component
import React from 'react';
import "./TitleWithBubbleBox.sass";
import bubble from "../../dist/img/bubble.png"; 

const TitleWithBubbleBox = ({ title, bubbleContent }) => { 
  return (
    <div className="main-title">
      {title}
      <div className="bubble-box">
        <img src={bubble} alt="bubble" /> 
        <div className="bubble-content">{bubbleContent}</div>
      </div>
    </div>
  );
};

export default TitleWithBubbleBox;
