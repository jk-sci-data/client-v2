import React from "react";
import "./BtnText22.sass";

function BtnText22(props) {
  const { children } = props;

  return (
    <article className="btn_text-2">
      <div className="text_label-1 valign-text-middle notosanssc-normal-shark-16px">{children}</div>
    </article>
  );
}

export default BtnText22;
