import React from "react";
import UploadWindowLarge from "components/UploadWindowLarge";
import PromptContainer from "components/PromptContainer";
import Word from "components/Word";
import Right from "components/Right";
import Btn22 from "components/Btn22";
import Btn7 from "components/Btn7";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import Note from "components/Note";
import Pagination from "components/Pagination";

import MainApp from "components/MainApp";

function ProductCertificateUpload(props) {
  const { titleContainerProps, categoryTitle3Props, footerProps } = props;

  return (
    <MainApp>
      <div className="main_container">
      <div className="cont-2">
      <TitleWithBubbleBox
                title="产品证书上传"
                bubbleContent="Bubble Content for 产品证书上传"
                />  
              
       
      
        <Note content="上传产品证书以补充报价需求" />
          <UploadWindowLarge />
          <PromptContainer />
       
        <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
        </div>
        <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
        </div>
        <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
        </div>
        <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
        </div>
        <div className="uploaded-item">
            <div className="left">
              <Word />
              <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
            </div>
            <Right />
        </div>
        <Pagination />
        <div className="btn_container" style={{ width: '100%',  justifyContent: 'center', display: 'flex',  }}>
        <Btn22 onClick={() => console.log('Button clicked')}>
        上传
        </Btn22>
        <Btn7 />
    </div>
        </div>
      </div>
    </MainApp>
  );
}

export default ProductCertificateUpload;
