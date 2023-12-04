import React from "react";
import Btn52 from "../Btn52";
import Btn62 from "../Btn62";
import "./NavPagenumber.sass";

function NavPagenumber(props) {
  const { buttons } = props;

  return (
    <div className="nav_pagenumber">
      <div className="nav_pagenumber_contant">
        <img className="btn-17" src="/img/last@2x.png" alt="btn_last" />
        <div className="nav_pagenumber_container">
          {
            buttons.map((b) => {
              return (b.active) ? 
                <Btn62>{b.text ?? b.children}</Btn62> :
                <Btn52>{b.text ?? b.children}</Btn52>
            })
          }
        </div>
        <img className="btn-17" src="/img/next@2x.png" alt="btn_next" />
      </div>
    </div>
  );
}

export default NavPagenumber;
