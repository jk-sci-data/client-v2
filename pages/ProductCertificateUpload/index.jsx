import React from "react";
import TitleContainer from "components/TitleContainer";
import CategoryTitle3 from "components/CategoryTitle3";
import UploadWindowLarge from "components/UploadWindowLarge";
import PromptContainer from "components/PromptContainer";
import "./ProductCertificateUpload.sass";
import MainApp from "components/MainApp";

function ProductCertificateUpload(props) {
  const { titleContainerProps, categoryTitle3Props, footerProps } = props;

  return (
    <MainApp>
      <div className="main_container-1">
        <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
        <div className="main-content-1">
          <CategoryTitle3 categorytitle={categoryTitle3Props.categorytitle} />
          <UploadWindowLarge />
          <PromptContainer />
        </div>
      </div>
    </MainApp>
  );
}

export default ProductCertificateUpload;
