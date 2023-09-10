import React from "react";
import "./Btn82.sass";

function Btn82(props) {
  const { children } = props;

  const handleClick = props.onClick ?? (() => {});
  return (
    <button className="btn" onClick={handleClick}>
      <div className="text-11 valign-text-middle notosanssc-medium-white-16px">{children}</div>
    </button>
  );
}

export default Btn82;
