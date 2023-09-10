import React from "react";
import Header3 from "../Header3";
import Nav9 from "../Nav9";
import TitleContainer from "../TitleContainer";
import InputRegular5 from "../InputRegular5";
import InputRegular10 from "../InputRegular10";
import Btn22 from "../Btn22";
import BtnText9 from "../BtnText9";
import Footer from "../Footer";
import "./AccountInfo.sass";

import SideNavMenu from "../SideNavMenu";

function AccountInfo(props) {
  const {
    header3Props,
    nav9Props,
    titleContainerProps,
    inputRegular5Props,
    inputRegular10Props,
    btn22Props,
    btnText9Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="account-info screen">
        <Header3 username141={header3Props.username141} logoContainerProps={header3Props.logoContainerProps} />
        <div className="main-10">{
        <SideNavMenu/>/*
            <Nav9
              text184={nav9Props.text184}
              line4={nav9Props.line4}
              navItem16Props={nav9Props.navItem16Props}
              navItemProps={nav9Props.navItemProps}
              navItem2Props={nav9Props.navItem2Props}
              subnavContainer32Props={nav9Props.subnavContainer32Props}
              subnavContainer2Props={nav9Props.subnavContainer2Props}
  />*/}
          <div className="main_container-10">
            <TitleContainer>{titleContainerProps.children}</TitleContainer>
            <div className="main-content-8">
              <div className="column_container-6">
                <InputRegular5
                  inputSubtitleContainer9Props={inputRegular5Props.inputSubtitleContainer9Props}
                  inputBoxRegularProps={inputRegular5Props.inputBoxRegularProps}
                />
                <InputRegular10
                  inputSubtitleContainer10Props={inputRegular10Props.inputSubtitleContainer10Props}
                  inputBoxRegularProps={inputRegular10Props.inputBoxRegularProps}
                />
              </div>
              <div className="btn_container-2">
                <Btn22>{btn22Props.children}</Btn22>
                <BtnText9>{btnText9Props.children}</BtnText9>
              </div>
            </div>
          </div>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default AccountInfo;
