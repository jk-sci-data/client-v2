import React from "react";
import "./Component12.sass";

function Component12(props) {
  const { overlapGroup, subtract, className } = props;

  return (
    <div className={`icon_regular-23 ${className || ""}`}>
      <div className="group-8662">
        <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="subtract-11" src={subtract} alt="Subtract" />
        </div>
      </div>
    </div>
  );
}

export default Component12;
