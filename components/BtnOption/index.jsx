import React, { useContext, useMemo } from "react";
import BtnCheckbox from "../BtnCheckbox";
import "./BtnOption.sass";
import { useWatch } from "react-hook-form";

import { InputContext } from "../../contexts";
function BtnOption(props) {
  const { value, option1 } = props; 

  const {field, form} = useContext(InputContext) || {};

  const formValue = useWatch({
    control: form?.control,
    name: field?.name
  });
  
  const onClick = () => {
      form?.setValue(field?.name, value);
  };

  const checked = value === formValue;
  return (
    <article className="btn_option" onClick={onClick} >
      <BtnCheckbox checked={checked}/>
      <div className="option-1 notosanssc-normal-black-16px">{option1}</div>
    </article>
  );
}

export default BtnOption;
