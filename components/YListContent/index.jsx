import React from 'react';
import bubble from "../../dist/img/bubble.png";
import './YListContent.sass'; 


const YListContent = ({ bubbleContent, subtitleText, label }) => {
  return (
    <div className="d-flex">
      <div className="right-align-flex ">
        <div  style={{ color: '#686868' }} className="subtitle notosanssc-normal-shark-20px mr-1">{subtitleText}</div>
        <div className="bubble-box">
          <img src={bubble} alt="bubble" />
          <div className="bubble-content">{bubbleContent}</div>
        </div>
      </div>
      <div className="text_label-123 valign-text-middle notosanssc-normal-shark-20px ml-3">
        {label}
      </div>
    </div>
  );
};

export default YListContent;
