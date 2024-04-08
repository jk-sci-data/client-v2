import React from "react";
import "./InputBoxRegular.sass";

function InputBoxRegular(props) {
  const { children } = props;

  return (
    <div className="input-box_regular-3">
      <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
        style={{ border: "none", backgroundColor: "trasnparent", color:"#303030"}} placeholder={children}
      />
    </div>
  );
}

export default InputBoxRegular;
