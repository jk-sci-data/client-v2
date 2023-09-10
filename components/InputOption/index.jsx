import React from "react";
import InputSubtitleContainer from "../InputSubtitleContainer";
import BtnOptionCombination from "../BtnOptionCombination";
import "./InputOption.sass";

function InputOption(props) {
  const { inputSubtitleContainerProps, btnOptionCombinationProps } = props;

  return (
    <div className="input_option">
      <InputSubtitleContainer>{inputSubtitleContainerProps.children}</InputSubtitleContainer>
      <BtnOptionCombination
        btnOption1Props={btnOptionCombinationProps.btnOption1Props}
        btnOption2Props={btnOptionCombinationProps.btnOption2Props}
      />
    </div>
  );
}

export default InputOption;
