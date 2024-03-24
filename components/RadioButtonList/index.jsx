import React from 'react';
import "./RadioButtonList.sass";

class RadioButtonList extends React.Component {
  render() {
    return (
      <ul className='each-one'>
        <li>
          <input type="radio" id="f-option" name="selector" />
          <label htmlFor="f-option">只显示已通过</label>
          <div className="check"></div>
        </li>

        <li>
          <input type="radio" id="s-option" name="selector" />
          <label htmlFor="s-option">只显示未通过</label>
          <div className="check">
            <div className="inside"></div>
          </div>
        </li>
      </ul>
    );
  }
}

export default RadioButtonList;
