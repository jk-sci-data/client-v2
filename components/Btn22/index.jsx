import React from "react";
import "./Btn22.sass";

/** Submit button on ProductEdit form */
function Btn22(props) {
  const { children } = props;

  return (
    <button className="btn-4" onClick={props.onClick || (() => {})}>
      <div className="text_label-87 valign-text-middle notosanssc-medium-white-16px">{children}</div>
    </button>
  );
}

export default Btn22;
