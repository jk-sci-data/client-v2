import React from "react";
import BtnCheckbox from "../BtnCheckbox";
import "./BtnOption.sass";

import { FormContext, InputContext } from "../../contexts";
function BtnOption(props) {
  const { option1 } = props; 

  const {name} = React.useContext(InputContext) || {};
  const {formData, updateFormData} = React.useContext(FormContext) || {};
  const value = props.value || option1; //`value` is the database name or id, `option1` is the label
  const checked = (() => {
    if ([name, formData].includes(undefined)) {
      return false;
    }
    return formData[name] == value;
  })();

  const onClick = () => {
    if (updateFormData && name)
    updateFormData(name, value)
  };

  return (
    <article className="btn_option" onClick={onClick} name={name} value={value}>
      <BtnCheckbox checked={checked}/>
      <div className="option-1 notosanssc-normal-black-16px">{option1}</div>
    </article>
  );
}

export default BtnOption;
