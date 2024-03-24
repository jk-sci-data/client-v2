import React from "react";

import "./TextItemContainer.sass";

function TextItemContainer(props) {
  const { number, text59 } = props;

  return (
    <div className="text-item_container">
      <div className="text-item-1">
        <div className="text-item-item-1 valign-text-middle notosanssc-medium-shark-16px">已选择</div>
        <div className="text-item-item-1 valign-text-middle notosanssc-medium-well-read-16px">{number}</div>
        <div className="text-item-item-1 valign-text-middle notosanssc-medium-shark-16px">{text59}</div>
      </div>
     
    </div>
  );
}

export default TextItemContainer;
