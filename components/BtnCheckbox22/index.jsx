import React from "react";
import "./BtnCheckbox22.sass";

function BtnCheckbox22(props) {
  const { className } = props;

  return (
  <div style={props.style || {}} className={props.className || ""}>
    <input type="checkbox" className={`btn_checkbox-3`}/>
  </div>
  );
}

export default BtnCheckbox22;
