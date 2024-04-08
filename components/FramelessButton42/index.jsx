import React from "react";
import "./FramelessButton42.sass";

function FramelessButton42(props) {
  const { children } = props;

  return (
    <article className="btn_frameless-3">
      <div className="text_label-93 valign-text-middle notosanssc-medium-tundora-16px">{children}</div>
    </article>
  );
}

export default FramelessButton42;
