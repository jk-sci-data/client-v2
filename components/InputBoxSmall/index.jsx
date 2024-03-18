import React from "react";
import "./InputBoxSmall.sass";

import { InputContext } from "contexts";

function InputBoxSmall(props) {
  const { className } = props;

  const inputCtx = React.useContext(InputContext) || {};
  const {name, form} = inputCtx;
  const value = form.data[name] ?? "";
  const onInput = form.onChange ?? (() => {});
  
  return <div className={`input-box_small ${className || ""}`}>
    <input name={name} value={value} onInput={onInput}
      style={{ background: "none", border: "none", height: "100%", width: "100%" }} />
  </div>;
}

export default InputBoxSmall;
