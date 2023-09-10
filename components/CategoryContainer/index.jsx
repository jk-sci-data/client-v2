import React from "react";
import CategoryTitle4 from "../CategoryTitle4";
import UploadWindowLarge from "../UploadWindowLarge";
import PromptContainer from "../PromptContainer";
import "./CategoryContainer.sass";

function CategoryContainer(props) {
  const { className, categoryTitle4Props, uploadWindowLargeProps } = props;

  return (
    <div className={`category_container-2 ${className || ""}`}>
      <CategoryTitle4 categorytitle={categoryTitle4Props.categorytitle} />
      <UploadWindowLarge className={uploadWindowLargeProps.className} />
      <PromptContainer />
    </div>
  );
}

export default CategoryContainer;
