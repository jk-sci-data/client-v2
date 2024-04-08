import React from "react";
import BtnCheckbox22 from "../BtnCheckbox22";
import ProductName from "../ProductName";
import RightContainer from "../RightContainer";
import "./ProductItem.sass";

function ProductItem(props) {
  const { className } = props;
  const {
    productName,
    productName2,
    casNumber,
    productNumber,
    sizeNumber,
    productId
  } = props;
  
  console.log("productItem props", props, {
    productName,
    productName2,
    casNumber,
    productNumber,
    sizeNumber,
    productId
  });
  return (
    <article className={`product-item-1 ${className || ""}`}>
      <div className="left_container" style={{ flexGrow: "1" }}>
        <BtnCheckbox22 style={{ width: "1em" }} />
        <div className="product_content-1">
          <div className="product_image">
            <img className="icon_regular-100" src="/img/component-1-9@2x.png" alt="icon_regular" />
          </div>
          <a href={`/product-info-edit-add-product?id=${productId}`} target="_blank">
            <ProductName name={productName} subname={productName2} />
          </a>
        </div>
      </div>
      <div className="right_container" style={{ width: "fit-content" }}>
        {
          [casNumber, productNumber, sizeNumber].map((item) => (
            <article className={`btn_text-21-1`} style={{ width: "8em" }}>
              <div className="text_label-135 valign-text-middle notosanssc-normal-tundora-16px" style={{ width: "100%" }}>{item}</div>
            </article>
          ))
        }
      </div>
    </article>
  );
}

export default ProductItem;
