import React from "react";
import TitleContainer from "components/TitleContainer";
import InputRegular from "components/InputRegular";
import InputRegular2 from "components/InputRegular2";
import InputRegular3 from "components/InputRegular3";
import InputRegular4 from "components/InputRegular4";
import CategoryTitle3 from "components/CategoryTitle3";
import UploadedItem from "components/UploadedItem";
import CategoryContainer2 from "components/CategoryContainer2";
import CategoryTitle4 from "components/CategoryTitle4";
import UploadWindowMedium from "components/UploadWindowMedium";
import MainApp from "components/MainApp";
import "./Certificate.sass";

function Certificate(props) {
  const {
    titleContainerProps,
    inputRegularProps,
    inputRegular2Props,
    inputRegular31Props,
    inputRegular32Props,
    inputRegular4Props,
    categoryTitle3Props,
    uploadedItem1Props,
    categoryContainer1Props,
    categoryContainer2Props,
    categoryTitle4Props,
    uploadedItem2Props,
    uploadWindowMediumProps
  } = props;

  return (
    <MainApp>
      <div className="main_container-8">
        <TitleContainer>{titleContainerProps.children}</TitleContainer>
        <div className="main-content-7">
        
          <div className="category_container-4">
            <CategoryTitle3
              categorytitle={categoryTitle3Props.categorytitle}
              className={categoryTitle3Props.className}
            />
            <UploadedItem wordProps={uploadedItem1Props.wordProps} />
          </div>
          <CategoryContainer2
            categoryTitle4Props={categoryContainer1Props.categoryTitle4Props}
            uploadWindowMediumProps={categoryContainer1Props.uploadWindowMediumProps}
          />
          <CategoryContainer2
            categoryTitle4Props={categoryContainer2Props.categoryTitle4Props}
            uploadWindowMediumProps={categoryContainer2Props.uploadWindowMediumProps}
          />
          <div className="category_container-4">
            <CategoryTitle4 categorytitle={categoryTitle4Props.categorytitle} />
            <UploadedItem wordProps={uploadedItem2Props.wordProps} />
            <UploadWindowMedium uploadWindowSmallProps={uploadWindowMediumProps.uploadWindowSmallProps} />
          </div>
        </div>
      </div>
    </MainApp>
  );
}

export default Certificate;
