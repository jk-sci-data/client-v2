import React from "react";
import BtnText10 from "../BtnText10";
import "./RightContainer.sass";

function RightContainer(props) {
  const { btnText1Props, btnText2Props, btnText3Props } = props;

  return (
    <div className="right_container">
      <BtnText10 className={btnText1Props.className}>{btnText1Props.children}</BtnText10>
      <BtnText10 className={btnText2Props.className}>{btnText2Props.children}</BtnText10>
      <BtnText10 className={btnText3Props.className}>{btnText3Props.children}</BtnText10>
    </div>
  );
}

export default RightContainer;
