import React from "react";
import "./Btn52.sass";

function Btn52(props) {
  const { children } = props;

  return (
    <div className="nav_pagenumber_container-item">
      <div className="number notosanssc-normal-tundora-16px">{children}</div>
    </div>
  );
}

export default Btn52;
