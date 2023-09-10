import React from "react";
import InputSubtitleContainer3 from "../InputSubtitleContainer3";
import BtnOptionCombination from "../BtnOptionCombination";
import "./InputOption3.sass";

function InputOption3(props) {
  const { inputSubtitleContainer3Props, btnOptionCombinationProps } = props;

  return (
    <div className="input_option-2">
      <InputSubtitleContainer3>{inputSubtitleContainer3Props.children}</InputSubtitleContainer3>
      <BtnOptionCombination
        btnOption1Props={btnOptionCombinationProps.btnOption1Props}
        btnOption2Props={btnOptionCombinationProps.btnOption2Props}
      />
    </div>
  );
}

export default InputOption3;
