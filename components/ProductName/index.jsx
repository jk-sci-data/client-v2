import React from "react";
import "./ProductName.sass";

function ProductName(props) {
  const { name, subname } = props;
  return (
    <div className="product_name-1">
     {name}
    </div>
  );
}

export default ProductName;
