import React from "react";
import Header3 from "../Header3";
import Nav82 from "../Nav82";
import TitleContainer from "../TitleContainer";
import TextItemContainer from "../TextItemContainer";
import BtnOption22 from "../BtnOption22";
import BtnFrameless4 from "../BtnFrameless4";
import CategoryTitle5 from "../CategoryTitle5";
import InquiryItem from "../InquiryItem";
import CategoryTitle6 from "../CategoryTitle6";
import NavPagenumber from "../NavPagenumber";
import Footer from "../Footer";
import "./Inquiry.sass";
import SideNavMenu from "../SideNavMenu";

function Inquiry(props) {
  const {
    text74,
    text70,
    text69,
    cas,
    text72,
    text73,
    text71,
    header3Props,
    nav82Props,
    titleContainerProps,
    textItemContainerProps,
    categoryTitle5Props,
    inquiryItem1Props,
    inquiryItem2Props,
    categoryTitle6Props,
    inquiryItem3Props,
    inquiryItem4Props,
    inquiryItem5Props,
    inquiryItem6Props,
    navPagenumberProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inquiry screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-3">{
          <SideNavMenu />/*
          <Nav82
            subnavContainerProps={nav82Props.subnavContainerProps}
            subnavContainer3Props={nav82Props.subnavContainer3Props}
            navItem15Props={nav82Props.navItem15Props}
            navItem7Props={nav82Props.navItem7Props}
            navItem8Props={nav82Props.navItem8Props}
          />*/
        }
          <div className="main_container-3">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-3">
              <div className="content">
                <div className="top_sub-nav">
                  <TextItemContainer number={textItemContainerProps.number} text59={textItemContainerProps.text59} />
                  <div className="btn-item_container-1">
                    <BtnOption22 />
                    <BtnFrameless4 />
                  </div>
                </div>
                <div className="inquiry_container">
                  <div className="inquiry-menu_container-1">
                    <div className="flex-row-2 notosanssc-medium-granite-gray-16px">
                      <div className="text-85 valign-text-middle">{text74}</div>
                      <div className="text-81 valign-text-middle">{text70}</div>
                      <div className="text-8-1 valign-text-middle">{text69}</div>
                      <div className="cas valign-text-middle">{cas}</div>
                      <div className="text-83 valign-text-middle">{text72}</div>
                      <div className="text-84 valign-text-middle">{text73}</div>
                      <div className="text-8-1 valign-text-middle">{text71}</div>
                    </div>
                  </div>
                  <CategoryTitle5 text={categoryTitle5Props.text} />
                  <div className="inquiry-1">
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem1Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem1Props.btnText51Props}
                      textButton1Props={inquiryItem1Props.textButton1Props}
                      btnText52Props={inquiryItem1Props.btnText52Props}
                      textButton2Props={inquiryItem1Props.textButton2Props}
                      textButton3Props={inquiryItem1Props.textButton3Props}
                      textButton4Props={inquiryItem1Props.textButton4Props}
                    />
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem2Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem2Props.btnText51Props}
                      textButton1Props={inquiryItem2Props.textButton1Props}
                      btnText52Props={inquiryItem2Props.btnText52Props}
                      textButton2Props={inquiryItem2Props.textButton2Props}
                      textButton3Props={inquiryItem2Props.textButton3Props}
                      textButton4Props={inquiryItem2Props.textButton4Props}
                    />
                  </div>
                  <CategoryTitle6>{categoryTitle6Props.children}</CategoryTitle6>
                  <div className="inquiry-1">
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem3Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem3Props.btnText51Props}
                      textButton1Props={inquiryItem3Props.textButton1Props}
                      btnText52Props={inquiryItem3Props.btnText52Props}
                      textButton2Props={inquiryItem3Props.textButton2Props}
                      textButton3Props={inquiryItem3Props.textButton3Props}
                      textButton4Props={inquiryItem3Props.textButton4Props}
                    />
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem4Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem4Props.btnText51Props}
                      textButton1Props={inquiryItem4Props.textButton1Props}
                      btnText52Props={inquiryItem4Props.btnText52Props}
                      textButton2Props={inquiryItem4Props.textButton2Props}
                      textButton3Props={inquiryItem4Props.textButton3Props}
                      textButton4Props={inquiryItem4Props.textButton4Props}
                    />
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem5Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem5Props.btnText51Props}
                      textButton1Props={inquiryItem5Props.textButton1Props}
                      btnText52Props={inquiryItem5Props.btnText52Props}
                      textButton2Props={inquiryItem5Props.textButton2Props}
                      textButton3Props={inquiryItem5Props.textButton3Props}
                      textButton4Props={inquiryItem5Props.textButton4Props}
                    />
                    <InquiryItem
                      btnCheckbox2Props={inquiryItem6Props.btnCheckbox2Props}
                      btnText51Props={inquiryItem6Props.btnText51Props}
                      textButton1Props={inquiryItem6Props.textButton1Props}
                      btnText52Props={inquiryItem6Props.btnText52Props}
                      textButton2Props={inquiryItem6Props.textButton2Props}
                      textButton3Props={inquiryItem6Props.textButton3Props}
                      textButton4Props={inquiryItem6Props.textButton4Props}
                    />
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

export default Inquiry;
