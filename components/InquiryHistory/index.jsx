import React from "react";
import Header3 from "../Header3";
import Menu52 from "../Menu52";
import TitleContainer from "../TitleContainer";
import Frame437 from "../Frame437";
import BtnFrameless from "../BtnFrameless";
import FramelessButton42 from "../FramelessButton42";
import HistorySubNav from "../HistorySubNav";
import CategoryTitle22 from "../CategoryTitle22";
import InquiryHistoryColumn from "../InquiryHistoryColumn";
import NavPagenumber from "../NavPagenumber";
import Footer from "../Footer";
import "./InquiryHistory.sass";
import SideNavMenu from "../SideNavMenu";

function InquiryHistory(props) {
  const {
    line6,
    text17,
    text13,
    text12,
    cas,
    text15,
    text16,
    text14,
    header3Props,
    nav72Props,
    titleContainerProps,
    frame437Props,
    btnFramelessProps,
    framelessButton42Props,
    historySubNavProps,
    categoryTitle221Props,
    inquiryHistoryColumn1Props,
    categoryTitle222Props,
    inquiryHistoryColumn2Props,
    navPagenumberProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inquiry-history screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main">{
          <SideNavMenu/>
          /*<Menu52
            text134={nav72Props.text134}
            line5={nav72Props.line5}
            frame279Props={nav72Props.frame279Props}
            frame280Props={nav72Props.frame280Props}
            navItem6Props={nav72Props.navItem6Props}
            navItem7Props={nav72Props.navItem7Props}
            navItem13Props={nav72Props.navItem13Props}
        />*/}
          <div className="main_container">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content">
              <div className="cont">
                <Frame437 buttonProps={frame437Props.buttonProps} searchBar2Props={frame437Props.searchBar2Props} />
                <div className="search_sub-nav">
                  <div className="overlap-group">
                    <img className="line-6" src={line6} alt="Line 6" />
                    <div className="sub-nav-item_container">
                      <BtnFrameless>{btnFramelessProps.children}</BtnFrameless>
                      <FramelessButton42>{framelessButton42Props.children}</FramelessButton42>
                    </div>
                  </div>
                </div>
                <div className="cont">
                  <HistorySubNav number={historySubNavProps.number} button32Props={historySubNavProps.button32Props} />
                  <div className="inquiry-menu_container">
                    <div className="flex-row notosanssc-medium-granite-gray-16px">
                      <div className="text-28 valign-text-middle">{text17}</div>
                      <div className="text-24 valign-text-middle">{text13}</div>
                      <div className="flex-row-item valign-text-middle">{text12}</div>
                      <div className="flex-row-item valign-text-middle">{cas}</div>
                      <div className="text-2-1 valign-text-middle">{text15}</div>
                      <div className="text-2-1 valign-text-middle">{text16}</div>
                      <div className="flex-row-item valign-text-middle">{text14}</div>
                    </div>
                  </div>
                  <CategoryTitle22 categoryTitle3Props={categoryTitle221Props.categoryTitle3Props} />
                  <InquiryHistoryColumn
                    inquiryHistoryItem1Props={inquiryHistoryColumn1Props.inquiryHistoryItem1Props}
                    inquiryHistoryItem2Props={inquiryHistoryColumn1Props.inquiryHistoryItem2Props}
                    inquiryHistoryItem3Props={inquiryHistoryColumn1Props.inquiryHistoryItem3Props}
                    inquiryHistoryItem4Props={inquiryHistoryColumn1Props.inquiryHistoryItem4Props}
                  />
                  <CategoryTitle22 categoryTitle3Props={categoryTitle222Props.categoryTitle3Props} />
                  <InquiryHistoryColumn
                    inquiryHistoryItem1Props={inquiryHistoryColumn2Props.inquiryHistoryItem1Props}
                    inquiryHistoryItem2Props={inquiryHistoryColumn2Props.inquiryHistoryItem2Props}
                    inquiryHistoryItem3Props={inquiryHistoryColumn2Props.inquiryHistoryItem3Props}
                    inquiryHistoryItem4Props={inquiryHistoryColumn2Props.inquiryHistoryItem4Props}
                  />
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

export default InquiryHistory;
