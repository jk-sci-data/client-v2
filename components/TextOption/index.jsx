import React from "react";
import BtnOption6 from "../BtnOption6";
import "./TextOption.sass";

function TextOption(props) {
  const { btnOption6Props } = props;

  return (
    <div className="text_option-1">
      <div className="text-17-1 notosanssc-normal-black-20px">一二三</div>
      <BtnOption6 btnCheckbox22Props={btnOption6Props.btnCheckbox22Props} />
    </div>
  );
}

export default TextOption;
