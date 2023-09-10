import React from "react";
import "./IconRegular4.sass";

function IconRegular4(props) {
  const { src, className } = props;

  return (
    <div className={`icon_regular-36 ${className || ""}`}>
      <img className="subtract-33" src={src} alt="Subtract" />
    </div>
  );
}

export default IconRegular4;
