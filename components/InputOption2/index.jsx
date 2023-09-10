import React from "react";
import InputSubtitleContainer7 from "../InputSubtitleContainer7";
import BtnOptionCombination from "../BtnOptionCombination";
import "./InputOption2.sass";

function InputOption2(props) {
  const { inputSubtitleContainer7Props, btnOptionCombinationProps } = props;

  return (
    <div className="input_option-1">
      <InputSubtitleContainer7>{inputSubtitleContainer7Props.children}</InputSubtitleContainer7>
      <BtnOptionCombination
        btnOption1Props={btnOptionCombinationProps.btnOption1Props}
        btnOption2Props={btnOptionCombinationProps.btnOption2Props}
      />
    </div>
  );
}

export default InputOption2;
