import React from "react";
import TitleContainer from "components/TitleContainer";
import CategoryTitle4 from "components/CategoryTitle4";
import InputGivenInfoSmall from "components/InputGivenInfoSmall";
import InputGivenInfoSmall2 from "components/InputGivenInfoSmall2";
import InputGivenInfoSmall3 from "components/InputGivenInfoSmall3";
import InputGivenInfoSmall4 from "components/InputGivenInfoSmall4";
import InputGivenInfoSmall5 from "components/InputGivenInfoSmall5";
import InputGivenInfoLarge from "components/InputGivenInfoLarge";
import InputGivenInfoSmall6 from "components/InputGivenInfoSmall6";
import InputGivenInfoSmall7 from "components/InputGivenInfoSmall7";
import InputGivenInfoSmall8 from "components/InputGivenInfoSmall8";
import InputGivenInfoSmall9 from "components/InputGivenInfoSmall9";
import InputGivenInfoSmall10 from "components/InputGivenInfoSmall10";
import InputSubtitleContainer2 from "components/InputSubtitleContainer2";
import BtnText72 from "components/BtnText72";
import InputSmall from "components/InputSmall";
import InputSmall2 from "components/InputSmall2";
import UploadWindowMedium from "components/UploadWindowMedium";
import CategoryContainer from "components/CategoryContainer";
import UpdatedDateContainer from "components/UpdatedDateContainer";
import Word from "components/Word";
import Right from "components/Right";
import Note from "components/Note";
import Right from "components/Right";
import Btn7 from "components/Btn7";

import BtnContainer from "components/BtnContainer";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import "./InquiryInquieyItem.sass";
import MainApp from "components/MainApp";

function InquiryInquieyItem(props) {
  const {
    titleContainerProps,
    categoryTitle41Props,
    inputGivenInfoSmall1Props,
    inputGivenInfoSmall2Props,
    inputGivenInfoSmall3Props,
    inputGivenInfoSmall41Props,
    inputGivenInfoSmall42Props,
    inputGivenInfoSmall5Props,
    inputGivenInfoLarge1Props,
    inputGivenInfoLarge2Props,
    inputGivenInfoSmall43Props,
    inputGivenInfoSmall44Props,
    inputGivenInfoSmall45Props,
    inputGivenInfoSmall61Props,
    inputGivenInfoSmall71Props,
    inputGivenInfoSmall72Props,
    inputGivenInfoSmall46Props,
    inputGivenInfoSmall8Props,
    inputGivenInfoSmall47Props,
    inputGivenInfoSmall48Props,
    inputGivenInfoSmall9Props,
    inputGivenInfoSmall10Props,
    inputGivenInfoSmall49Props,
    inputGivenInfoSmall62Props,
    inputGivenInfoSmall73Props,
    inputGivenInfoSmall63Props,
    inputGivenInfoSmall2Props2,
    inputSubtitleContainer2Props,
    btnText72Props,
    categoryTitle42Props,
    inputSmallProps,
    inputSmall2Props,
    uploadWindowMediumProps,
    categoryContainerProps,
    btnContainerProps
  } = props;

  return (
    <MainApp>
       <div className="main_container-2">
      <div className="cont-main">
            <TitleWithBubbleBox
              title="报价单信息"
              bubbleContent="Bubble Content for 报价单信息"
              />  
          </div>
        <div className="main-content-2">
          <div className="product_-info-box">
            <div className="category_container">
              <CategoryTitle4 categorytitle={categoryTitle41Props.categorytitle} />
              <div className="column_container">
                <div className="flex-col">
                  <div className="flex-row-1">
                    <div className="input_giveninfo_small-container">
                      <InputGivenInfoSmall 
                        inputSubtitleContainerProps={inputGivenInfoSmall1Props.inputSubtitleContainerProps}
                        btnText6Props={inputGivenInfoSmall1Props.btnText6Props}
                      />
                      <InputGivenInfoSmall2
                        inputSubtitleContainer4Props={inputGivenInfoSmall2Props.inputSubtitleContainer4Props}
                        btnText6Props={inputGivenInfoSmall2Props.btnText6Props}
                      />
                      <InputGivenInfoSmall3
                        subtitle={inputGivenInfoSmall3Props.subtitle}
                        btnText6Props={inputGivenInfoSmall3Props.btnText6Props}
                      />
                    </div>
                    <div className="input_giveninfo_small-container">
                      <InputGivenInfoSmall4
                        inputSubtitleContainerProps={inputGivenInfoSmall41Props.inputSubtitleContainerProps}
                        btnText7Props={inputGivenInfoSmall41Props.btnText7Props}
                      />
                      <InputGivenInfoSmall4
                        inputSubtitleContainerProps={inputGivenInfoSmall42Props.inputSubtitleContainerProps}
                        btnText7Props={inputGivenInfoSmall42Props.btnText7Props}
                      />
                      <InputGivenInfoSmall5 btnText7Props={inputGivenInfoSmall5Props.btnText7Props} />
                    </div>
                  </div>
                  <InputGivenInfoLarge
                    inputSubtitleContainerProps={inputGivenInfoLarge1Props.inputSubtitleContainerProps}
                    btnText7Props={inputGivenInfoLarge1Props.btnText7Props}
                  />
                  <InputGivenInfoLarge
                    inputSubtitleContainerProps={inputGivenInfoLarge2Props.inputSubtitleContainerProps}
                    btnText7Props={inputGivenInfoLarge2Props.btnText7Props}
                  />
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall43Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall43Props.btnText7Props}
                    />
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall44Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall44Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall45Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall45Props.btnText7Props}
                    />
                    <InputGivenInfoSmall6
                      inputSubtitleContainer2Props={inputGivenInfoSmall61Props.inputSubtitleContainer2Props}
                      btnText7Props={inputGivenInfoSmall61Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall7
                      inputSubtitleContainer4Props={inputGivenInfoSmall71Props.inputSubtitleContainer4Props}
                      btnText7Props={inputGivenInfoSmall71Props.btnText7Props}
                    />
                    <InputGivenInfoSmall7
                      inputSubtitleContainer4Props={inputGivenInfoSmall72Props.inputSubtitleContainer4Props}
                      btnText7Props={inputGivenInfoSmall72Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall46Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall46Props.btnText7Props}
                    />
                    <InputGivenInfoSmall8
                      inputSubtitleContainer3Props={inputGivenInfoSmall8Props.inputSubtitleContainer3Props}
                      btnText7Props={inputGivenInfoSmall8Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall47Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall47Props.btnText7Props}
                    />
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall48Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall48Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall9
                      subtitle={inputGivenInfoSmall9Props.subtitle}
                      btnText7Props={inputGivenInfoSmall9Props.btnText7Props}
                    />
                    <InputGivenInfoSmall10
                      inputSubtitleContainer6Props={inputGivenInfoSmall10Props.inputSubtitleContainer6Props}
                      btnText7Props={inputGivenInfoSmall10Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall49Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall49Props.btnText7Props}
                    />
                    <InputGivenInfoSmall6
                      inputSubtitleContainer2Props={inputGivenInfoSmall62Props.inputSubtitleContainer2Props}
                      btnText7Props={inputGivenInfoSmall62Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall7
                      inputSubtitleContainer4Props={inputGivenInfoSmall73Props.inputSubtitleContainer4Props}
                      btnText7Props={inputGivenInfoSmall73Props.btnText7Props}
                    />
                    <InputGivenInfoSmall6
                      inputSubtitleContainer2Props={inputGivenInfoSmall63Props.inputSubtitleContainer2Props}
                      btnText7Props={inputGivenInfoSmall63Props.btnText7Props}
                    />
                  </div>
                  <InputGivenInfoSmall
                    inputSubtitleContainerProps={inputGivenInfoSmall2Props2.inputSubtitleContainerProps}
                    btnText6Props={inputGivenInfoSmall2Props2.btnText6Props}
                  />
                  <div className="input_given-info_large">
                    <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
                    <BtnText72 className={btnText72Props.className}>{btnText72Props.children}</BtnText72>
                  </div>
                </div>
              </div>
            </div>
            <div className="category_container-1">
              <CategoryTitle4 categorytitle={categoryTitle42Props.categorytitle} />
              <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall4
                      inputSubtitleContainerProps={inputGivenInfoSmall49Props.inputSubtitleContainerProps}
                      btnText7Props={inputGivenInfoSmall49Props.btnText7Props}
                    />
                    <InputGivenInfoSmall6
                      inputSubtitleContainer2Props={inputGivenInfoSmall62Props.inputSubtitleContainer2Props}
                      btnText7Props={inputGivenInfoSmall62Props.btnText7Props}
                    />
                  </div>
                  <div className="input_giveninfo_small-container-1">
                    <InputGivenInfoSmall7
                      inputSubtitleContainer4Props={inputGivenInfoSmall73Props.inputSubtitleContainer4Props}
                      btnText7Props={inputGivenInfoSmall73Props.btnText7Props}
                    />
                    <InputGivenInfoSmall6
                      inputSubtitleContainer2Props={inputGivenInfoSmall63Props.inputSubtitleContainer2Props}
                      btnText7Props={inputGivenInfoSmall63Props.btnText7Props}
                    />
                  </div>
            </div>
            <Note content="上传产品证书" />
            <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
            
        </div>
          </div>
          <div className="btn_container" style={{ width: '100%',  justifyContent: 'center', display: 'flex',  }}>
          <Btn7 />
          </div>
        </div>
      </div>
    </MainApp>
  );
}

export default InquiryInquieyItem;
