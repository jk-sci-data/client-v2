import React from "react";
import Header3 from "../Header3";
import Nav4 from "../Nav4";
import TitleContainer from "../TitleContainer";
import InputRegular from "../InputRegular";
import InputRegular2 from "../InputRegular2";
import InputRegular3 from "../InputRegular3";
import InputRegular4 from "../InputRegular4";
import CategoryTitle3 from "../CategoryTitle3";
import UploadedItem from "../UploadedItem";
import CategoryContainer2 from "../CategoryContainer2";
import CategoryTitle4 from "../CategoryTitle4";
import UploadWindowMedium from "../UploadWindowMedium";
import Footer from "../Footer";
import "./Certificate.sass";
import SideNavMenu from "../SideNavMenu";

function Certificate(props) {
  const {
    header3Props,
    nav4Props,
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
    uploadWindowMediumProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="certificate screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-8">{
          <SideNavMenu/>/*
          <Nav4
            text65={nav4Props.text65}
            line4={nav4Props.line4}
            navItem1Props={nav4Props.navItem1Props}
            navItem2Props={nav4Props.navItem2Props}
            navItem12Props={nav4Props.navItem12Props}
            subnavContainer3Props={nav4Props.subnavContainer3Props}
            subnavContainer2Props={nav4Props.subnavContainer2Props}
        />*/}
          <div className="main_container-8">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-7">
              <div className="column_container-5">
                <InputRegular
                  inputSubtitleContainer8Props={inputRegularProps.inputSubtitleContainer8Props}
                  inputBoxRegularProps={inputRegularProps.inputBoxRegularProps}
                />
                <InputRegular2
                  inputSubtitleContainer9Props={inputRegular2Props.inputSubtitleContainer9Props}
                  inputBoxRegular2Props={inputRegular2Props.inputBoxRegular2Props}
                />
                <InputRegular3
                  inputSubtitleContainer9Props={inputRegular31Props.inputSubtitleContainer9Props}
                  inputBoxRegular4Props={inputRegular31Props.inputBoxRegular4Props}
                />
                <InputRegular3
                  inputSubtitleContainer9Props={inputRegular32Props.inputSubtitleContainer9Props}
                  inputBoxRegular4Props={inputRegular32Props.inputBoxRegular4Props}
                />
                <InputRegular4
                  inputSubtitleContainer8Props={inputRegular4Props.inputSubtitleContainer8Props}
                  inputBoxRegular4Props={inputRegular4Props.inputBoxRegular4Props}
                />
              </div>
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
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Certificate;
