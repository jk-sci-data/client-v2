import React from "react";
import BtnCheckbox22 from "../BtnCheckbox22";
import "./BtnOption6.sass";

function BtnOption6(props) {
  const { btnCheckbox22Props } = props;

  return (
    <div className="btn_option-4">
      <div className="text-102 valign-text-middle notosanssc-normal-white-16px-2"></div>
      <BtnCheckbox22 className={btnCheckbox22Props.className} />
    </div>
  );
}

export default BtnOption6;
