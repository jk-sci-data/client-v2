import React from "react";
import Button62 from "../Button62";

import "./HistorySubNav.sass";

function HistorySubNav(props) {
  const { number, button32Props } = props;

  return (
    <div className="history_sub-nav">
      <div className="frame-422">
        <div className="frame-422-item valign-text-middle notosanssc-medium-shark-16px">共</div>
        <div className="frame-422-item valign-text-middle notosanssc-medium-well-read-16px">{number}</div>
        <div className="frame-422-item valign-text-middle notosanssc-medium-shark-16px">个结果</div>
      </div>
    </div>
  );
}

export default HistorySubNav;
