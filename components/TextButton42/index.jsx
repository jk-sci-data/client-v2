import React from "react";
import "./TextButton42.sass";

function TextButton42(props) {
  const { children, className } = props;

  return (
    <div className={`btn_text-14-1 ${className || ""}`}>
      <div className="text_label-98 valign-text-middle notosanssc-normal-ocean-blue-pearl-16px">{children}</div>
    </div>
  );
}

export default TextButton42;
