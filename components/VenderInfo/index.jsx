import React from "react";
import Header3 from "../Header3";
import Nav8 from "../Nav8";
import TitleContainer from "../TitleContainer";
import InputRegular5 from "../InputRegular5";
import InputBoxRegular from "../InputBoxRegular";
import BtnOption5 from "../BtnOption5";
import TextOption from "../TextOption";
import InputRegular6 from "../InputRegular6";
import InputRegular7 from "../InputRegular7";
import InputRegular8 from "../InputRegular8";
import InputRegular9 from "../InputRegular9";
import InputRegular10 from "../InputRegular10";
import Btn22 from "../Btn22";
import Footer from "../Footer";
import "./VenderInfo.sass";
import SideNavMenu from "../SideNavMenu";

function VenderInfo(props) {
  const {
    spanText1,
    spanText2,
    btn,
    text173,
    header3Props,
    nav8Props,
    titleContainerProps,
    inputRegular51Props,
    inputBoxRegularProps,
    btnOption5Props,
    textOption1Props,
    textOption2Props,
    inputRegular52Props,
    inputRegular6Props,
    inputRegular7Props,
    inputRegular81Props,
    inputRegular82Props,
    inputRegular83Props,
    inputRegular53Props,
    inputRegular9Props,
    inputRegular10Props,
    btn22Props,
    footerProps,
  } = props;
  console.log("vendorInfo", props);
  return (
    <div className="container-center-horizontal">
      <div className="vender-info screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-9">{
          <SideNavMenu/>/*
          <Nav8
            text169={nav8Props.text169}
            line4={nav8Props.line4}
            navItemProps={nav8Props.navItemProps}
            navItem16Props={nav8Props.navItem16Props}
            navItem2Props={nav8Props.navItem2Props}
            subnavContainer32Props={nav8Props.subnavContainer32Props}
            subnavContainer2Props={nav8Props.subnavContainer2Props}
          />*/
        }
          <div className="main_container-9">
            <div className="cont-2">
              <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
              <div className="cont-2">
                <InputRegular5
                  inputSubtitleContainer9Props={inputRegular51Props.inputSubtitleContainer9Props}
                  inputBoxRegularProps={inputRegular51Props.inputBoxRegularProps}
                />
                <div className="input_container_regular">
                  <div className="input_title_container">
                    <div className="text-172 notosanssc-normal-white-20px">
                      <span className="notosanssc-normal-well-read-20px">{spanText1}</span>
                      <span className="notosanssc-normal-shark-20px">{spanText2}</span>
                    </div>
                  </div>
                  <div className="t_column">
                    <div className="input_container-1">
                      <InputBoxRegular>{inputBoxRegularProps.children}</InputBoxRegular>
                      <img className="btn-31" src={btn} alt="btn" />
                    </div>
                    <div className="t_column">
                      <div className="text_option">
                        <div className="text-173 notosanssc-normal-black-20px">{text173}</div>
                        <BtnOption5 text174={btnOption5Props.text174} />
                      </div>
                      <TextOption btnOption6Props={textOption1Props.btnOption6Props} />
                      <TextOption btnOption6Props={textOption2Props.btnOption6Props} />
                    </div>
                  </div>
                </div>
                <InputRegular5
                  inputSubtitleContainer9Props={inputRegular52Props.inputSubtitleContainer9Props}
                  inputBoxRegularProps={inputRegular52Props.inputBoxRegularProps}
                />
                <InputRegular6
                  inputSubtitleContainer2Props={inputRegular6Props.inputSubtitleContainer2Props}
                  inputBoxRegularProps={inputRegular6Props.inputBoxRegularProps}
                />
                <InputRegular7
                  inputSubtitleContainer10Props={inputRegular7Props.inputSubtitleContainer10Props}
                  inputBoxRegular3Props={inputRegular7Props.inputBoxRegular3Props}
                />
                <InputRegular8
                  spanText2={inputRegular81Props.spanText2}
                  inputBoxRegular3Props={inputRegular81Props.inputBoxRegular3Props}
                />
                <InputRegular8
                  spanText2={inputRegular82Props.spanText2}
                  inputBoxRegular3Props={inputRegular82Props.inputBoxRegular3Props}
                />
                <InputRegular8
                  spanText2={inputRegular83Props.spanText2}
                  inputBoxRegular3Props={inputRegular83Props.inputBoxRegular3Props}
                />
                <InputRegular5
                  inputSubtitleContainer9Props={inputRegular53Props.inputSubtitleContainer9Props}
                  inputBoxRegularProps={inputRegular53Props.inputBoxRegularProps}
                />
                <InputRegular9
                  spanText1={inputRegular9Props.spanText1}
                  spanText2={inputRegular9Props.spanText2}
                  inputBoxRegularProps={inputRegular9Props.inputBoxRegularProps}
                />
                <InputRegular10
                  inputSubtitleContainer10Props={inputRegular10Props.inputSubtitleContainer10Props}
                  inputBoxRegularProps={inputRegular10Props.inputBoxRegularProps}
                />
              </div>
            </div>
            <Btn22>{btn22Props.children}</Btn22>
          </div>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default VenderInfo;
