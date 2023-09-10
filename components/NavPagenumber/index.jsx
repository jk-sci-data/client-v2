import React from "react";
import Btn52 from "../Btn52";
import Btn62 from "../Btn62";
import "./NavPagenumber.sass";

function NavPagenumber(props) {
  const { btn51Props, btn52Props, btn53Props, btn54Props, btn55Props, btn56Props } = props;

  return (
    <div className="nav_pagenumber">
      <div className="nav_pagenumber_contant">
        <img className="btn-17" src="/img/last@2x.png" alt="btn_last" />
        <div className="nav_pagenumber_container">
          <Btn52>{btn51Props.children}</Btn52>
          <Btn52>{btn52Props.children}</Btn52>
          <Btn52>{btn53Props.children}</Btn52>
          <Btn62 />
          <Btn52>{btn54Props.children}</Btn52>
          <Btn52>{btn55Props.children}</Btn52>
          <Btn52>{btn56Props.children}</Btn52>
        </div>
        <img className="btn-17" src="/img/next@2x.png" alt="btn_next" />
      </div>
    </div>
  );
}

export default NavPagenumber;
