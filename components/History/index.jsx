import React from "react";
import Header3 from "../Header3";
import Nav83 from "../Nav83";
import TitleContainer from "../TitleContainer";
import Frame437 from "../Frame437";
import BtnFrameless from "../BtnFrameless";
import FramelessButton42 from "../FramelessButton42";
import HistorySubNav from "../HistorySubNav";
import CategoryTitle22 from "../CategoryTitle22";
import ProductHistoryItem from "../ProductHistoryItem";
import NavPagenumber from "../NavPagenumber";
import Footer from "../Footer";
import "./History.sass";
import SideNavMenu from "../SideNavMenu";

function History(props) {
  const {
    line6,
    header3Props,
    navProps,
    titleContainerProps,
    searchContainerProps,
    btnFramelessProps,
    btnFrameless21Props,
    btnFrameless22Props,
    historySubNavProps,
    categoryTitle1Props,
    productHistoryItem1Props,
    productHistoryItem2Props,
    categoryTitle2Props,
    productHistoryItem3Props,
    productHistoryItem4Props,
    navPagenumberProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="history screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-4">{
          <SideNavMenu />
        /* <Nav83
            text178={navProps.text178}
            line4={navProps.line4}
            subnavContainerProps={navProps.subnavContainerProps}
            navItem3Props={navProps.navItem3Props}
            navItem102Props={navProps.navItem102Props}
            navItem15Props={navProps.navItem15Props}
            frame281Props={navProps.frame281Props}
          />*/}
          <div className="main_container-4">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-4">
              <div className="content-1">
                <Frame437
                  buttonProps={searchContainerProps.buttonProps}
                  searchBar2Props={searchContainerProps.searchBar2Props}
                />
                <div className="search_sub-nav-1">
                  <div className="overlap-group-45">
                    <img className="line-6-1" src={line6} alt="Line 6" />
                    <div className="sub-nav-item_container-1">
                      <BtnFrameless>{btnFramelessProps.children}</BtnFrameless>
                      <FramelessButton42>{btnFrameless21Props.children}</FramelessButton42>
                      <FramelessButton42>{btnFrameless22Props.children}</FramelessButton42>
                    </div>
                  </div>
                </div>
                <div className="ory_container">
                  <HistorySubNav number={historySubNavProps.number} button32Props={historySubNavProps.button32Props} />
                  <div className="ory_container">
                    <CategoryTitle22 categoryTitle3Props={categoryTitle1Props.categoryTitle3Props} />
                    <div className="history-column">
                      <ProductHistoryItem
                        productNameProps={productHistoryItem1Props.productNameProps}
                        dataContainerProps={productHistoryItem1Props.dataContainerProps}
                      />
                      <ProductHistoryItem
                        className={productHistoryItem2Props.className}
                        productNameProps={productHistoryItem2Props.productNameProps}
                        dataContainerProps={productHistoryItem2Props.dataContainerProps}
                      />
                    </div>
                  </div>
                  <div className="ory_container">
                    <CategoryTitle22 categoryTitle3Props={categoryTitle2Props.categoryTitle3Props} />
                    <div className="history-column">
                      <ProductHistoryItem
                        className={productHistoryItem3Props.className}
                        productNameProps={productHistoryItem3Props.productNameProps}
                        dataContainerProps={productHistoryItem3Props.dataContainerProps}
                      />
                      <ProductHistoryItem
                        className={productHistoryItem4Props.className}
                        productNameProps={productHistoryItem4Props.productNameProps}
                        dataContainerProps={productHistoryItem4Props.dataContainerProps}
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

export default History;
