import React from "react";
import BtnText10 from "../BtnText10";
import "./ProductName.sass";

function ProductName(props) {
  const { name, subname } = props;
  return (
    <div className="product_name-1">
      <BtnText10>{name}</BtnText10>
      <BtnText10 className="btn_text-21-2">{subname}</BtnText10>
    </div>
  );
}

export default ProductName;
