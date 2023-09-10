import React from "react";
import "./BtnText10.sass";

function BtnText10(props) {
  const { children, className } = props;

  return (
    <article className={`btn_text-21-1 ${className || ""}`}>
      <div className="text_label-135 valign-text-middle notosanssc-normal-tundora-16px">{children}</div>
    </article>
  );
}

export default BtnText10;
