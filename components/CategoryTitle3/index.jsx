import React from "react";
import "./CategoryTitle3.sass";

function CategoryTitle3(props) {
  const { categorytitle, className } = props;

  return (
    <div className={`category-title-4 ${className || ""}`}>
      <div className="category-title-item valign-text-middle notosanssc-normal-black-16px">{categorytitle}</div>
      <div className="category-title-item valign-text-middle notosanssc-normal-stiletto-16px">必填</div>
    </div>
  );
}

export default CategoryTitle3;
