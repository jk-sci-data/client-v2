import React from "react";
import "./CategoryTitle323.sass";

function CategoryTitle323(props) {
  const { text5 } = props;

  return (
    <div className="category-title-2 notosanssc-normal-black-16px">
      <div className="text-21 valign-text-middle">2021</div>
      <div className="text-21 valign-text-middle"> /</div>
      <div className="text-21 valign-text-middle">11</div>
      <div className="text-21 valign-text-middle"> /</div>
      <div className="text-21 valign-text-middle">{text5}</div>
    </div>
  );
}

export default CategoryTitle323;
