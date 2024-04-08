import React from "react";
import CategoryTitle4 from "../CategoryTitle4";
import UploadWindowMedium from "../UploadWindowMedium";
import "./CategoryContainer2.sass";

function CategoryContainer2(props) {
  const { categoryTitle4Props, uploadWindowMediumProps } = props;

  return (
    <div className="category_container-5">
      <CategoryTitle4 categorytitle={categoryTitle4Props.categorytitle} />
      <UploadWindowMedium uploadWindowSmallProps={uploadWindowMediumProps.uploadWindowSmallProps} />
    </div>
  );
}

export default CategoryContainer2;
