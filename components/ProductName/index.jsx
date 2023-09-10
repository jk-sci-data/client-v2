import React from "react";
import BtnText10 from "../BtnText10";
import "./ProductName.sass";

function ProductName(props) {
  const { btnText1Props, btnText2Props } = props;

  return (
    <div className="product_name-1">
      <BtnText10>{btnText1Props.children}</BtnText10>
      <BtnText10 className={btnText2Props.className}>{btnText2Props.children}</BtnText10>
    </div>
  );
}

export default ProductName;
