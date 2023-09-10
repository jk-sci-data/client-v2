import React from "react";
import "./BtnText72.sass";

function BtnText72(props) {
  const { children, className } = props;

  return (
    <div className={`btn_text-19-1 ${className || ""}`}>
      <div className="text_label-123 valign-text-middle notosanssc-normal-shark-20px">{children}</div>
    </div>
  );
}

export default BtnText72;
