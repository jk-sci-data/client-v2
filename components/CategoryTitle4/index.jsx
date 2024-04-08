import React from "react";
import "./CategoryTitle4.sass";

function CategoryTitle4(props) {
  const { categorytitle } = props;

  return (
    <div className="category-title-7">
      <div className="category-title-10 valign-text-middle notosanssc-normal-black-16px">{categorytitle}</div>
      <div className="text-64-1 valign-text-middle notosanssc-normal-granite-gray-16px">选填</div>
    </div>
  );
}

export default CategoryTitle4;
