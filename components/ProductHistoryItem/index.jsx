import React from "react";
import ProductName from "../ProductName";
import DataContainer from "../DataContainer";
import "./ProductHistoryItem.sass";

function ProductHistoryItem(props) {
  const { className, productNameProps, dataContainerProps } = props;

  return (
    <article className={`product-history-item-1 ${className || ""}`}>
      <div className="product_content">
        <div className="product_name">
          <img className="icon_regular-98" src="/img/component-1-9@2x.png" alt="icon_regular" />
        </div>
        <ProductName btnText1Props={productNameProps.btnText1Props} btnText2Props={productNameProps.btnText2Props} />
      </div>
      <DataContainer
        rightItem1Props={dataContainerProps.rightItem1Props}
        rightItem2Props={dataContainerProps.rightItem2Props}
        rightItem3Props={dataContainerProps.rightItem3Props}
      />
    </article>
  );
}

export default ProductHistoryItem;
