import React from "react";
import TitleContainer from "components/TitleContainer";
import InputRegular5 from "components/InputRegular5";
import InputRegular10 from "components/InputRegular10";
import Btn22 from "components/Btn22";
import BtnText9 from "components/BtnText9";
import "./AccountInfo.sass";
import MainApp from "components/MainApp";

function AccountInfo(props) {
  const {
    titleContainerProps,
    inputRegular5Props,
    inputRegular10Props,
    btn22Props,
    btnText9Props
  } = props;

  return (
    <MainApp>
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
    </MainApp>
  );
}

export default AccountInfo;
