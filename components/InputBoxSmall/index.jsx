import React from "react";
import "./InputBoxSmall.sass";

import { InputContext, FormContext } from "../../contexts";

function InputBoxSmall(props) {
  const { className } = props;

  const inputCtx = React.useContext(InputContext) || {};
  const formCtx = React.useContext(FormContext) || {};
  const formData = formCtx.formData || {};
  const onInput = formCtx.handleInputChange || (() => {});
  return <div className={`input-box_small ${className || ""}`}>
    <input name={inputCtx.name} value={formData[inputCtx.name] || ""} onInput={onInput}
      style={{ background: "none", border: "none", height: "100%", width: "100%" }} />
  </div>;
}

export default InputBoxSmall;
