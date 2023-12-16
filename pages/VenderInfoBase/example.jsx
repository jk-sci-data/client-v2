





import React from "react";
import TitleContainer from "components/TitleContainer";
import InputRegular5 from "components/InputRegular5";
import InputBoxRegular from "components/InputBoxRegular";
import BtnOption5 from "components/BtnOption5";
import TextOption from "components/TextOption";
import InputRegular6 from "components/InputRegular6";
import InputRegular7 from "components/InputRegular7";
import InputRegular8 from "components/InputRegular8";
import InputRegular9 from "components/InputRegular9";
import InputRegular10 from "components/InputRegular10";
import Btn22 from "components/Btn22";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import Note from "components/Note";
import MainApp from "components/MainApp";
import "./VenderInfo.sass";
/*repair the 'input_regular-7 input_regular-8' couldn't dropdown issue*/ 
function VenderInfo(props) {
  const {
    spanText1,
    spanText2,
    btn,
    text173,
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
    btn22Props
  } = props;
  
  return (
    <MainApp>
      <div className="main_container-9">
        <div className="cont-2">
          <TitleWithBubbleBox
            title="供应商信息"
            bubbleContent="Bubble Content for 供应商信息"
            />  
             <Note content="基本信息" />
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
        <Btn22 onClick={() => console.log("click successful")}>{btn22Props.children}</Btn22>
      </div>
    </MainApp>
  );
}

export default VenderInfo;
