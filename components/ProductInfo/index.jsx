import React from "react";
import Header3 from "../Header3";
import Menu8 from "../Menu8";
import TitleContainer from "../TitleContainer";
import TextItemContainer from "../TextItemContainer";
import BtnOption22 from "../BtnOption22";
import BtnFrameless4 from "../BtnFrameless4";
import Btn22 from "../Btn22";
import Btn3 from "../Btn3";
import Btn4 from "../Btn4";
import Searchbar2 from "../Searchbar2";
import CategoryTitle5 from "../CategoryTitle5";
import ProductItem from "../ProductItem";
import CategoryTitle6 from "../CategoryTitle6";
import NavPagenumber from "../NavPagenumber";
import Footer from "../Footer";
import "./ProductInfo.sass";
import SideNavMenu from "../SideNavMenu";

function ProductInfo(props) {
  const {
    text63,
    text61,
    cas,
    text62,
    header3Props,
    menu8Props,
    titleContainerProps,
    textItemContainerProps,
    btn2Props,
    btn4Props,
    searchbar2Props,
    categoryTitle5Props,
    productItem1Props,
    productItem2Props,
    categoryTitle6Props,
    productItem3Props,
    productItem4Props,
    productItem5Props,
    productItem6Props,
    productItem7Props,
    productItem8Props,
    productItem9Props,
    productItem10Props,
    navPagenumberProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="product-info screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-7">{
          <SideNavMenu/>
          /*
          <Menu8
            line4={menu8Props.line4}
            frame279Props={menu8Props.frame279Props}
            navItem3Props={menu8Props.navItem3Props}
            navItem102Props={menu8Props.navItem102Props}
            navItem5Props={menu8Props.navItem5Props}
            frame281Props={menu8Props.frame281Props}
        />*/}
          <div className="main_container-7">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-6">
              <div className="content-2">
                <div className="top_sub-nav-1">
                  <TextItemContainer number={textItemContainerProps.number} text59={textItemContainerProps.text59} />
                  <div className="btn-item_container-2">
                    <BtnOption22 />
                    <BtnFrameless4 />
                    <Btn22>{btn2Props.children}</Btn22>
                  </div>
                </div>
                <div className="middle_sub-nav">
                  <Btn3 />
                  <Btn4 text_Label={btn4Props.text_Label} />
                  <Searchbar2 text_Label={searchbar2Props.text_Label} icon_Regular={searchbar2Props.icon_Regular} />
                </div>
                <div className="product_container">
                  <div className="product-menu_container">
                    <div className="flex-row-5 notosanssc-medium-granite-gray-16px">
                      <div className="text-155 valign-text-middle">{text63}</div>
                      <div className="text-153 valign-text-middle">{text61}</div>
                      <div className="cas-5 valign-text-middle">{cas}</div>
                      <div className="text-154 valign-text-middle">{text62}</div>
                    </div>
                  </div>
                  <CategoryTitle5 text={categoryTitle5Props.text} />
                  <div className="product-item_container">
                    <div className="product-column">
                      <ProductItem
                        productNameProps={productItem1Props.productNameProps}
                        rightContainerProps={productItem1Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem2Props.className}
                        productNameProps={productItem2Props.productNameProps}
                        rightContainerProps={productItem2Props.rightContainerProps}
                      />
                    </div>
                  </div>
                  <CategoryTitle6 className={categoryTitle6Props.className}>
                    {categoryTitle6Props.children}
                  </CategoryTitle6>
                  <div className="product-item_container">
                    <div className="product-column">
                      <ProductItem
                        className={productItem3Props.className}
                        productNameProps={productItem3Props.productNameProps}
                        rightContainerProps={productItem3Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem4Props.className}
                        productNameProps={productItem4Props.productNameProps}
                        rightContainerProps={productItem4Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem5Props.className}
                        productNameProps={productItem5Props.productNameProps}
                        rightContainerProps={productItem5Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem6Props.className}
                        productNameProps={productItem6Props.productNameProps}
                        rightContainerProps={productItem6Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem7Props.className}
                        productNameProps={productItem7Props.productNameProps}
                        rightContainerProps={productItem7Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem8Props.className}
                        productNameProps={productItem8Props.productNameProps}
                        rightContainerProps={productItem8Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem9Props.className}
                        productNameProps={productItem9Props.productNameProps}
                        rightContainerProps={productItem9Props.rightContainerProps}
                      />
                      <ProductItem
                        className={productItem10Props.className}
                        productNameProps={productItem10Props.productNameProps}
                        rightContainerProps={productItem10Props.rightContainerProps}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <NavPagenumber
                btn51Props={navPagenumberProps.btn51Props}
                btn52Props={navPagenumberProps.btn52Props}
                btn53Props={navPagenumberProps.btn53Props}
                btn54Props={navPagenumberProps.btn54Props}
                btn55Props={navPagenumberProps.btn55Props}
                btn56Props={navPagenumberProps.btn56Props}
              />
            </div>
          </div>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default ProductInfo;
