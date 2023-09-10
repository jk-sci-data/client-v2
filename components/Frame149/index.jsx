import React from "react";
import BtnOption3 from "../BtnOption3";
import "./Frame149.sass";

function Frame149(props) {
  const { btnOption3Props } = props;

  return (
    <div className="frame-1-1">
      <BtnOption3>{btnOption3Props.children}</BtnOption3>
    </div>
  );
}

export default Frame149;
