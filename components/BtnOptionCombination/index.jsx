import React, {useContext} from "react";
import BtnOption from "../BtnOption";
import "./BtnOptionCombination.sass";
import { InputContext } from "../../contexts";

function BtnOptionCombination(props) {
  const { btnOption1Props, btnOption2Props } = props;

  const {options} = useContext(InputContext) || {};

  return (
    <div className="btn_option_combination">
      <BtnOption option1={btnOption1Props.option1} value={options?.[0]} />
      <BtnOption option1={btnOption2Props.option1} value={options?.[1]} />
    </div>
  );
}

export default BtnOptionCombination;
