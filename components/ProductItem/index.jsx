import React from "react";
import BtnCheckbox22 from "../BtnCheckbox22";
import ProductName from "../ProductName";
import RightContainer from "../RightContainer";
import "./ProductItem.sass";

function ProductItem(props) {
  const { className, productNameProps, rightContainerProps, productInfo } = props;

  return (
    <article className={`product-item-1 ${className || ""}`}>
      <div className="left_container">
        <BtnCheckbox22 />
        <div className="product_content-1">
          <div className="product_image">
            <img className="icon_regular-100" src="/img/component-1-9@2x.png" alt="icon_regular" />
          </div>
          <ProductName btnText1Props={productNameProps.btnText1Props} btnText2Props={productNameProps.btnText2Props} />
        </div>
      </div>
      <RightContainer
        btnText1Props={rightContainerProps.btnText1Props}
        btnText2Props={rightContainerProps.btnText2Props}
        btnText3Props={rightContainerProps.btnText3Props}
      />
    </article>
  );
}

export default ProductItem;
