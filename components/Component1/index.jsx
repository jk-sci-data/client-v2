import React from "react";
import ClipboardDarkGrey from "../ClipboardDarkGrey";
import "./Component1.sass";

function Component1(props) {
  const { clipboardDarkGreyProps } = props;

  return (
    <div className="icon_regular-12">
      <ClipboardDarkGrey src={clipboardDarkGreyProps.src} />
    </div>
  );
}

export default Component1;
