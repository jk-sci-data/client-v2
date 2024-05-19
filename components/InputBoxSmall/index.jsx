import React from "react";
import "./InputBoxSmall.sass";

import { InputContext } from "contexts";

function InputBoxSmall(props) {
  const { className } = props;

  const inputCtx = React.useContext(InputContext) || {};
  const {field} = inputCtx;
  
  return <div className={`input-box_small ${className || ""}`}>
    <input {...(field || {})}
      style={{ background: "none", border: "none", height: "100%", width: "100%" }} />
  </div>;
}

export default InputBoxSmall;
