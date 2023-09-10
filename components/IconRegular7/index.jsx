import React from "react";
import "./IconRegular7.sass";

function IconRegular7(props) {
  const { vector109, subtract, className } = props;

  return (
    <div className={`icon_regular-64 ${className || ""}`}>
      <div className="group-8660">
        <div className="overlap-group1">
          <div className="overlap-group-34">
            <div className="ellipse-65"></div>
            <img className="vector-109" src={vector109} alt="Vector 109" />
          </div>
          <img className="subtract-62" src={subtract} alt="Subtract" />
        </div>
      </div>
    </div>
  );
}

export default IconRegular7;
