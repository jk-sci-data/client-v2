import React from 'react';
import './InputInsideWords.sass'; 

class InputInsideWords extends React.Component {
  render() {
    const { inputContent, rightContent } = this.props;

    return (
      <div className="inputContainer">
        <input type="text" className="inputBox" />
        <div className="rightContent">{rightContent}</div>
      </div>
    );
  }
}

export default InputInsideWords;
