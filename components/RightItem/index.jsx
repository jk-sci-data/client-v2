import React from "react";
import BtnText10 from "../BtnText10";
import "./RightItem.sass";

function RightItem(props) {
  const { text182, textButton22Props } = props;

  return (
    <div className="right_item">
      <div className="text-104 valign-text-middle notosanssc-normal-quick-silver-16px">{text182}</div>
      <BtnText10 className={textButton22Props.className}>{textButton22Props.children}</BtnText10>
    </div>
  );
}

export default RightItem;
