import React from "react";
import CategoryTitle323 from "../CategoryTitle323";
import "./CategoryTitle22.sass";

function CategoryTitle22(props) {
  const { categoryTitle3Props } = props;

  return (
    <div className="category-title">
      <CategoryTitle323 text5={categoryTitle3Props.text5} />
    </div>
  );
}

export default CategoryTitle22;
