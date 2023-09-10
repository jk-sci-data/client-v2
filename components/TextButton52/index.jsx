import React from "react";
import "./TextButton52.sass";

function TextButton52(props) {
  const { children } = props;

  return (
    <div className="text-button-2">
      <div className="date valign-text-middle notosanssc-normal-shark-16px">{children}</div>
    </div>
  );
}

export default TextButton52;
