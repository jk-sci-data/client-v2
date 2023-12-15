import React from "react";
import BtnText3 from "../BtnText3";
import "./AdviceContainer.sass";
import IconMore from "../../dist/img/icon-more.png";
function AdviceContainer(props) {
  const { text30, btnText3Props } = props;

  return (
    <div className="advice_container">
      <div className="text-122 valign-text-middle notosanssc-normal-tundora-16px">{text30}</div>
      <BtnText3>{btnText3Props.children}</BtnText3>
    </div>
  );
}

export default AdviceContainer;
