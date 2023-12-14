import React from 'react';
import BubbleBox from '../BubbleBox'; // Replace 'path-to-BubbleBox-component' with the actual path to your BubbleBox component
import "./InputNameWithBubble.sass";
const InputNameWithBubble = ({ Name, bubbleContent }) => {
    return (
      <div className="list-left">
        <label htmlFor="text">
          <span style={{ color: "#9B2634" }}>*</span>
          {Name}
          <BubbleBox bubbleContent={bubbleContent} />
        </label>
      </div>
    );
  };

export default InputNameWithBubble;
