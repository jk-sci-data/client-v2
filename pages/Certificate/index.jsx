import React from "react";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import InputNameWithBubble from "components/InputNameWithBubble";
import InputName from "components/InputName";
import InputInsideWords from "components/InputInsideWords";


import CategoryTitle3 from "components/CategoryTitle3";
import UploadedItem from "components/UploadedItem";
import CategoryContainer2 from "components/CategoryContainer2";
import CategoryTitle4 from "components/CategoryTitle4";
import UploadWindowMedium from "components/UploadWindowMedium";
import MainApp from "components/MainApp";
import "./Certificate.sass";

function Certificate(props) {
  const {
    titleContainerProps,
    inputRegularProps,
    inputRegular2Props,
    inputRegular31Props,
    inputRegular32Props,
    inputRegular4Props,
    categoryTitle3Props,
    uploadedItem1Props,
    categoryContainer1Props,
    categoryContainer2Props,
    categoryTitle4Props,
    uploadedItem2Props,
    uploadWindowMediumProps
  } = props;

  return (
    <MainApp>
      <div className="main_container-8">
        <TitleWithBubbleBox
                title="资质证照"
                bubbleContent="Bubble Content for 资质证照"
                />  

        <div className="main-content-7">
              <div className="form-list-wrap">
                    <InputNameWithBubble Name="经营资质类型" bubbleContent="Bubble Content for" />
                    <input type="text" name="必填" placeholder="必填"></input>
                </div>
                <div className="form-list-wrap">
                    <InputName Name="公司成立时间" bubbleContent="Bubble Content for" />
                    <input type="date" id="dateInput" name="dateInput"></input>
                </div>
                <div className="form-list-wrap">
                    <InputName Name="注册资本" bubbleContent="Bubble Content for" />  
                    <InputInsideWords rightContent="元" />
                </div>
                <div className="form-list-wrap">
                    <InputName Name="员工总数" bubbleContent="Bubble Content for" />
                    <InputInsideWords rightContent="人" />
                </div>
                <div className="form-list-wrap">
                    <InputName Name="公司占地面积" bubbleContent="Bubble Content for" />
                    <InputInsideWords rightContent="平方米" />
                </div>
          <div className="category_container-4">
            <CategoryTitle3 
              categorytitle={categoryTitle3Props.categorytitle}
              className={categoryTitle3Props.className}
            />
            <UploadedItem wordProps={uploadedItem1Props.wordProps} />
          </div>
          <CategoryContainer2
            categoryTitle4Props={categoryContainer1Props.categoryTitle4Props}
            uploadWindowMediumProps={categoryContainer1Props.uploadWindowMediumProps}
          />
          <CategoryContainer2
            categoryTitle4Props={categoryContainer2Props.categoryTitle4Props}
            uploadWindowMediumProps={categoryContainer2Props.uploadWindowMediumProps}
          />
          <div className="category_container-4">
            <CategoryTitle4 categorytitle={categoryTitle4Props.categorytitle} />
            <UploadedItem wordProps={uploadedItem2Props.wordProps} />
            <UploadWindowMedium uploadWindowSmallProps={uploadWindowMediumProps.uploadWindowSmallProps} />
          </div>
        </div>
      </div>
    </MainApp>
  );
}

export default Certificate;
