import React from "react";
import "./Btn4.sass";

function Btn4(props) {
  const { text_Label } = props;

  return (
    <div className="btn-14">
      <img className="icon_regular-83" src="/img/component-1-8@2x.png" alt="icon_regular" />
      <div className="text_label-94 valign-text-middle notosanssc-medium-tundora-16px">{text_Label}</div>
    </div>
  );
}

export default Btn4;
