import React, { useEffect, useContext } from "react";
import TitleContainer from "components/TitleContainer";
import AlertContainer from "components/AlertContainer";
import CategoryTitle3 from "components/CategoryTitle3";
import InputLarge from "components/InputLarge";
import InputSmall from "components/InputSmall";
import InputSmall2 from "components/InputSmall2";
import InputSmall3 from "components/InputSmall3";
import CategoryTitle4 from "components/CategoryTitle4";
import InputSmall4 from "components/InputSmall4";
import InputOption from "components/InputOption";
import InputSmall5 from "components/InputSmall5";
import InputSmall6 from "components/InputSmall6";
import InputOption2 from "components/InputOption2";
import InputOption3 from "components/InputOption3";
import InputSmall7 from "components/InputSmall7";
import InputLarge2 from "components/InputLarge2";
import CategoryContainer from "components/CategoryContainer";
import UpdatedDateContainer from "components/UpdatedDateContainer";
import BtnContainer from "components/BtnContainer";
import "./ProductInfoEditaddProduct.sass";

import { InputProvider } from "contexts";
import { ProductEditContext } from "./ProductEditContext";


export default function ProductInfoEditContent(props) {

  const {
    productInfoEditaddProductData,
    handleFileUpload,
    form,
    handleSaveBtn,
    handleCancelBtn,
  } = useContext(ProductEditContext) || {};
  console.log("product form", form);
  const {
    prompt_Text,
    frame381Props,
    alertContainer1Props,
    categoryTitle32Props,
    inputInformationLongProps,
    inputInformation21Props,
    inputInformation221Props,
    inputInformation31Props,
    inputInformation22Props,
    inputInformation222Props,
    inputInformation23Props,
    categoryTitle421Props,
    inputInformation24Props,
    inputInformation41Props,
    inputInformation223Props,
    inputInformation224Props,
    inputOption1Props,
    inputInformation42Props,
    inputInformation225Props,
    inputSmall6Props,
    categoryTitle422Props,
    inputInformation25Props,
    inputInformation26Props,
    inputOption2Props,
    inputOption21Props,
    inputOption3Props,
    inputOption22Props,
    inputOption31Props,
    inputOption32Props,
    inputOption23Props,
    inputInformation32Props,
    inputInformation27Props,
    inputInformation28Props,
    inputInformation29Props,
    inputInformation226Props,
    inputInformation227Props,
    inputInformation71Props,
    inputInformation72Props,
    inputInformation43Props,
    inputInformation210Props,
    inputInformationLong2Props,
    frame382Props,
    alertContainer2Props,
    frame382Props2,
  } = productInfoEditaddProductData;

  //InputProvider is necessary because Input children are nested
  return (
    <div className="main_container-6">
      <TitleContainer className={frame381Props.className}>{frame381Props.children}</TitleContainer>
      <div className="cont-1">
        <AlertContainer adviceContainerProps={alertContainer1Props.adviceContainerProps} />
        <div className="cont-1">
          <div className="cont-1">
            <CategoryTitle3
              categorytitle={categoryTitle32Props.categorytitle}
              className={categoryTitle32Props.className}
            />
            <div className="column_container-2">
              <div className="flex-col-1">
                <InputProvider form={form} name="title_en">
                  <InputLarge
                    inputSubtitleContainerProps={inputInformationLongProps.inputSubtitleContainerProps}
                    inputSubtitleContainerProps2={inputInformationLongProps.inputSubtitleContainerProps2}
                  />
                </InputProvider>
                <div className="input_small-container">
                  <InputProvider form={form} name="product_number">
                    <InputSmall
                      className={inputInformation21Props.className}
                      inputSubtitleContainerProps={inputInformation21Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="purity">
                    <InputSmall2
                      className={inputInformation221Props.className}
                      inputSubtitleContainer2Props={inputInformation221Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                </div>
                <div className="input_small-container">
                  <InputProvider form={form} name="shelf_life_months">
                    <InputSmall3
                      inputSubtitleContainer3Props={inputInformation31Props.inputSubtitleContainer3Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="status">
                    <InputSmall
                      className={inputInformation22Props.className}
                      inputSubtitleContainerProps={inputInformation22Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                </div>
                <div className="input_small-container">
                  <InputProvider form={form} name="package">
                    <InputSmall2
                      className={inputInformation222Props.className}
                      inputSubtitleContainer2Props={inputInformation222Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="other_purity">
                    <InputSmall
                      className={inputInformation23Props.className}
                      inputSubtitleContainerProps={inputInformation23Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CategoryTitle4 categorytitle={categoryTitle421Props.categorytitle} />
            <div className="column_container-3">
              <div className="input_-container">
                <InputProvider form={form} name="title_cn">
                  <InputSmall
                    className={inputInformation24Props.className}
                    inputSubtitleContainerProps={inputInformation24Props.inputSubtitleContainerProps}
                  />
                </InputProvider>
                <InputProvider form={form} name="molecular_weight">
                  <InputSmall4
                    inputSubtitleContainer4Props={inputInformation41Props.inputSubtitleContainer4Props}
                  />
                </InputProvider>
                <InputProvider form={form} name="flash_point">
                  <InputSmall2
                    className={inputInformation223Props.className}
                    inputSubtitleContainer2Props={inputInformation223Props.inputSubtitleContainer2Props}
                  />
                </InputProvider>
                <InputProvider form={form} name="boiling_point">
                  <InputSmall2
                    className={inputInformation224Props.className}
                    inputSubtitleContainer2Props={inputInformation224Props.inputSubtitleContainer2Props}
                  />
                </InputProvider>
                <InputProvider form={form} name="standard_pkg" value={['yes', 'no']}>
                  <InputOption
                    inputSubtitleContainerProps={inputOption1Props.inputSubtitleContainerProps}
                    btnOptionCombinationProps={inputOption1Props.btnOptionCombinationProps}
                  />
                </InputProvider>
              </div>
              <div className="input_small-container-1">
                <InputProvider form={form} name="cas">
                  <InputSmall5 />
                </InputProvider>
                <InputProvider form={form} name="molecular_formula">
                  <InputSmall4
                    inputSubtitleContainer4Props={inputInformation42Props.inputSubtitleContainer4Props}
                  />
                </InputProvider>
                <InputProvider form={form} name="melting_point">
                  <InputSmall2
                    className={inputInformation225Props.className}
                    inputSubtitleContainer2Props={inputInformation225Props.inputSubtitleContainer2Props}
                  />
                </InputProvider>
                <InputProvider form={form} name="mfcd">
                  <InputSmall6 inputSubtitleContainer6Props={inputSmall6Props.inputSubtitleContainer6Props} />
                </InputProvider>
              </div>
            </div>
          </div>
          <div className="container">
            <CategoryTitle4 categorytitle={categoryTitle422Props.categorytitle} />
            <div className="column_container-4">
              <div className="flex-row-4">
                <div className="input_-container-1">
                  <InputProvider form={form} name="catalog_price" >
                    <InputSmall
                      className={inputInformation25Props.className}
                      inputSubtitleContainerProps={inputInformation25Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="closing_price">
                    <InputSmall
                      className={inputInformation26Props.className}
                      inputSubtitleContainerProps={inputInformation26Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="invoice_type" value={['commercial', 'personal']}>
                    <InputOption
                      inputSubtitleContainerProps={inputOption2Props.inputSubtitleContainerProps}
                      btnOptionCombinationProps={inputOption2Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="freight" value={['yes', 'no']}>
                    <InputOption2
                      inputSubtitleContainer7Props={inputOption21Props.inputSubtitleContainer7Props}
                      btnOptionCombinationProps={inputOption21Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="tax_included" value={['yes', 'no']}>
                    <InputOption
                      inputSubtitleContainerProps={inputOption3Props.inputSubtitleContainerProps}
                      btnOptionCombinationProps={inputOption3Props.btnOptionCombinationProps}
                    />
                  </InputProvider>

                  <InputProvider form={form} name="hazardous" value={['yes', 'no']}>
                    <InputOption2
                      inputSubtitleContainer7Props={inputOption22Props.inputSubtitleContainer7Props}
                      btnOptionCombinationProps={inputOption22Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="specialty" value={['yes', 'no']}>
                    <InputOption3
                      inputSubtitleContainer3Props={inputOption31Props.inputSubtitleContainer3Props}
                      btnOptionCombinationProps={inputOption31Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="advantageous" value={['yes', 'no']}>
                    <InputOption3
                      inputSubtitleContainer3Props={inputOption32Props.inputSubtitleContainer3Props}
                      btnOptionCombinationProps={inputOption32Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="customized" values={['yes', 'no']}>
                    <InputOption2
                      inputSubtitleContainer7Props={inputOption23Props.inputSubtitleContainer7Props}
                      btnOptionCombinationProps={inputOption23Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="other_expenses">
                    <InputSmall3
                      inputSubtitleContainer3Props={inputInformation32Props.inputSubtitleContainer3Props}
                    />
                  </InputProvider>
                </div>
                <div className="input_small-container-2">
                  <InputProvider form={form} name="catalog_currency">
                    <InputSmall
                      className={inputInformation27Props.className}
                      inputSubtitleContainerProps={inputInformation27Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="closing_currency">
                    <InputSmall
                      className={inputInformation28Props.className}
                      inputSubtitleContainerProps={inputInformation28Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="selling_price">
                    <InputSmall
                      className={inputInformation29Props.className}
                      inputSubtitleContainerProps={inputInformation29Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="freight_cost">
                    <InputSmall2
                      className={inputInformation226Props.className}
                      inputSubtitleContainer2Props={inputInformation226Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="tax_rate">
                    <InputSmall2
                      className={inputInformation227Props.className}
                      inputSubtitleContainer2Props={inputInformation227Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="price_expiration">
                    <InputSmall7
                      inputSubtitleContainer7Props={inputInformation71Props.inputSubtitleContainer7Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="restrictions">
                    <InputSmall7
                      inputSubtitleContainer7Props={inputInformation72Props.inputSubtitleContainer7Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="packaging_cost">
                    <InputSmall4
                      inputSubtitleContainer4Props={inputInformation43Props.inputSubtitleContainer4Props}
                    />
                  </InputProvider>
                  <InputProvider form={form} name="other_cost">
                    <InputSmall
                      className={inputInformation210Props.className}
                      inputSubtitleContainerProps={inputInformation210Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                </div>
              </div>
              <InputProvider form={form} name="comments">
                <InputLarge2
                  inputSubtitleContainer2Props={inputInformationLong2Props.inputSubtitleContainer2Props}
                  inputSubtitleContainer2Props2={inputInformationLong2Props.inputSubtitleContainer2Props2}
                />
              </InputProvider>
            </div>
          </div>
          <CategoryContainer
            className={frame382Props.className}
            categoryTitle4Props={frame382Props.categoryTitle4Props}
            uploadWindowLargeProps={frame382Props.uploadWindowLargeProps}
          />
          <div className="alert_container">
            <div className="prompt">
              <AlertContainer adviceContainerProps={alertContainer2Props.adviceContainerProps} />
              <div className="prompt_container-3">
                <div className="prompt_text notosanssc-normal-tundora-16px">{prompt_Text}</div>
              </div>
            </div>
          </div>
          <UpdatedDateContainer />
        </div>
        <InputProvider value={{
          handlers: [
            { onClick: handleSaveBtn },
            { onClick: handleCancelBtn }
          ]
        }}>
          <BtnContainer btn2Props={frame382Props2.btn2Props} />
        </InputProvider>
      </div>
    </div>
  );
}
