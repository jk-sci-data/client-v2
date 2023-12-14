import React from 'react';
import BubbleBox from '../BubbleBox'; // Replace 'path-to-BubbleBox-component' with the actual path to your BubbleBox component
import "./InputNameWithNoRed.sass";
const InputNameWithNoRed = ({ Name, bubbleContent }) => {
    return (
      <div className="list-left">
        
        <label htmlFor="text">
          {Name}
        </label>
      </div>
    );
  };

export default InputNameWithNoRed;
