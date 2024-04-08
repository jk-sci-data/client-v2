import React from "react";
import "./TitleContainer.sass";

function TitleContainer(props) {
  const { children, className } = props;

  return (
    <div className={`title_container ${className || ""}`}>
      <h1 className="text notosanssc-medium-black-34px">{children}</h1>
    </div>
  );
}

export default TitleContainer;
