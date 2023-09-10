import React from "react";
import "./InputBoxRegular42.sass";

import { InputContext, FormContext } from "../../contexts";

function InputBoxRegular42(props) {
  const { icon_Regular, inputPlaceholder } = props;

  const { name, value } = React.useContext(InputContext) || {};
  const { handleInputChange } = React.useContext(FormContext) || {};

  return (
    <article className="input-box_regular">
      <img className="icon_regular" src={icon_Regular} alt="icon_regular" />
      <input
        className="placeholder notosanssc-normal-quick-silver-20px"
        name={name || "placeholder"}
        placeholder={inputPlaceholder}
        type={props.inputType || "text"}
        value={value || ""}
        onInput={handleInputChange || (() => {})}
      />
    </article>
  );
}

export default InputBoxRegular42;
