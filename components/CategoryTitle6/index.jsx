import React from "react";
import "./CategoryTitle6.sass";

function CategoryTitle6(props) {
  const { children, className } = props;

  return (
    <div className={`category-title-21 ${className || ""}`}>
      <div className="category-title-22">
        <div className="text-80 valign-text-middle notosanssc-normal-black-16px">{children}</div>
      </div>
    </div>
  );
}

export default CategoryTitle6;
