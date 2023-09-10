import React from "react";
import "./BtnCheckbox.sass";

function BtnCheckbox(props) {
  const style = props.checked ? { backgroundImage: "radial-gradient(circle, #B02C38, white)" } : {};
  return <div className="btn_checkbox-5" style={style}></div>;
}

export default BtnCheckbox;
