import React, { useContext } from "react";
import "./InputBoxRegular.sass";
import { InputContext } from "contexts/InputContext";
function InputBoxRegular(props) {
  const { children } = props;
  const {field} = useContext(InputContext) || {};

  return (
    <div className="input-box_regular-3">
      <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
        style={{ border: "none", backgroundColor: "trasnparent", color:"#303030"}} placeholder={children}
        {...(field || {})}
      />
    </div>
  );
}

export default InputBoxRegular;
