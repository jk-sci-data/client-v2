import React from "react";
import AdviceContainer from "../AdviceContainer";
import "./AlertContainer.sass";

function AlertContainer(props) {
  const { adviceContainerProps } = props;

  return (
    <div className="t_container">
      <AdviceContainer text30={adviceContainerProps.text30} btnText3Props={adviceContainerProps.btnText3Props} />
    </div>
  );
}

export default AlertContainer;
