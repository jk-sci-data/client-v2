import React from "react";
import Button62 from "../Button62";
import "./CategoryTitle2.sass";

function CategoryTitle2(props) {
  const { categorytitle, btnProps } = props;

  return (
    <div className="category-title-24">
      <div className="category-title-25 valign-text-middle notosanssc-normal-black-16px">{categorytitle}</div>
      <Button62 text_Label={btnProps.text_Label} component1={btnProps.component1} />
    </div>
  );
}

export default CategoryTitle2;
