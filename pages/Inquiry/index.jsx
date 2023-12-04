import React from "react";
import TitleContainer from "components/TitleContainer";
import TextItemContainer from "components/TextItemContainer";
import BtnOption22 from "components/BtnOption22";
import BtnFrameless4 from "components/BtnFrameless4";
import CategoryTitle5 from "components/CategoryTitle5";
import InquiryItem from "components/InquiryItem";
import CategoryTitle6 from "components/CategoryTitle6";
import NavPagenumber from "components/NavPagenumber";
import "./Inquiry.sass";
import MainApp from "components/MainApp";

function Inquiry(props) {
  const {
    text74,
    text70,
    text69,
    cas,
    text72,
    text73,
    text71,
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
  } = props;

  return (
    <MainApp>
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
    </MainApp>
  );
}

export default Inquiry;
