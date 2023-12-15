// src/components/MyComponent.js
import React from 'react';
import IconMore from '../../dist/img/icon-more.png';
import "./MoreWithAButton.sass";
const MoreWithAButton = ({ confirmText }) => {
  return (
    <div className="main-bottom">
      <a href="#" className="more">
        更多
        <img src={IconMore} alt="more" />
      </a>
      <a href="#" className="confirm">
        {confirmText}
      </a>
    </div>
  );
};

export default MoreWithAButton;



