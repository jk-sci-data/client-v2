import React from "react";
import BtnOption from "../BtnOption";
import "./BtnOptionCombination.sass";
import { InputContext } from "../../contexts";

function BtnOptionCombination(props) {
  const { btnOption1Props, btnOption2Props } = props;

  const ctx = React.useContext(InputContext) || {};
  const values = ctx.values || [];

  return (
    <div className="btn_option_combination">
      <BtnOption option1={btnOption1Props.option1} value={values[0]} />
      <BtnOption option1={btnOption2Props.option1} value={values[1]} />
    </div>
  );
}

export default BtnOptionCombination;
