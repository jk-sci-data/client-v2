import React from "react";
import Header3 from "../Header3";
import Nav92 from "../Nav92";
import TitleContainer from "../TitleContainer";
import CategoryTitle3 from "../CategoryTitle3";
import UploadWindowLarge from "../UploadWindowLarge";
import PromptContainer from "../PromptContainer";
import Footer from "../Footer";
import "./ProductCertificateUpload.sass";
import SideNavMenu from "../SideNavMenu";

function ProductCertificateUpload(props) {
  const { header3Props, nav92Props, titleContainerProps, categoryTitle3Props, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="product-certificate-upload screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-1">{
          <SideNavMenu/>
          /*<Nav92
            text178={nav92Props.text178}
            line5={nav92Props.line5}
            subnavContainerProps={nav92Props.subnavContainerProps}
            subnavContainer3Props={nav92Props.subnavContainer3Props}
            navItem6Props={nav92Props.navItem6Props}
            navItem16Props={nav92Props.navItem16Props}
            navItem8Props={nav92Props.navItem8Props}
          />*/}
          <div className="main_container-1">
            <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-1">
              <CategoryTitle3 categorytitle={categoryTitle3Props.categorytitle} />
              <UploadWindowLarge />
              <PromptContainer />
            </div>
          </div>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default ProductCertificateUpload;
