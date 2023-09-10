import React from "react";
import "./Button62.sass";

function Button62(props) {
  const { text_Label, component1 } = props;

  return (
    <div className="btn-1">
      <div className="text_label-82 valign-text-middle notosanssc-medium-tundora-16px">{text_Label}</div>
      <img className="icon_regular-75" src={component1} alt="icon_regular" />
    </div>
  );
}

export default Button62;
