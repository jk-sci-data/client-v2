import React from "react";
import Btn22 from "../Btn22";
import Btn7 from "../Btn7";
import "./BtnContainer.sass";

import { InputContext } from "contexts";

function BtnContainer(props) {
  const { btn2Props } = props;

  const ctx = React.useContext(InputContext);
  const handlers = ctx?.handlers || [];

  return (
    <div className="btn_container">
      <Btn22 {...(handlers[0] || {})}>{btn2Props.children}</Btn22>
      <Btn7 {...(handlers[1] || {})} />
    </div>
  );
}

export default BtnContainer;
