import React from "react";
import "./BtnFrameless.sass";

function BtnFrameless(props) {
  const { children } = props;

  return (
    <article className="btn_frameless">
      <div className="text_label-90 valign-text-middle notosanssc-medium-stiletto-16px">{children}</div>
    </article>
  );
}

export default BtnFrameless;
