import React from "react";
import "./ClipboardDarkGrey.sass";

function ClipboardDarkGrey(props) {
  const { src } = props;

  return (
    <div className="clipboard-dark-grey">
      <img className="subtract" src={src} alt="Subtract" />
    </div>
  );
}

export default ClipboardDarkGrey;
