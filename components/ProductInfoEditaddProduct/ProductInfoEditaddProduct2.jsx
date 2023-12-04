import React, { useContext } from "react";
import TitleContainer from "../TitleContainer";
import AlertContainer from "../AlertContainer";
import CategoryTitle3 from "../CategoryTitle3";
import InputLarge from "../InputLarge";
import InputSmall from "../InputSmall";
import InputSmall2 from "../InputSmall2";
import InputSmall3 from "../InputSmall3";
import CategoryTitle4 from "../CategoryTitle4";
import InputSmall4 from "../InputSmall4";
import InputOption from "../InputOption";
import InputSmall5 from "../InputSmall5";
import InputSmall6 from "../InputSmall6";
import InputOption2 from "../InputOption2";
import InputOption3 from "../InputOption3";
import InputSmall7 from "../InputSmall7";
import InputLarge2 from "../InputLarge2";
import CategoryContainer from "../CategoryContainer";
import UpdatedDateContainer from "../UpdatedDateContainer";
import BtnContainer from "../BtnContainer";
import "./ProductInfoEditaddProduct.sass";

import { FormContext, InputProvider } from "../../contexts";
import MainApp from "../MainApp";
import { AppContext } from "../../contexts";

function ProductInfoEditaddProduct(props) {
  const { productInfoEditaddProductData } = useContext(AppContext);
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

  const { formData, setFormData, updateFormData } = useContext(FormContext) || {};

  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");
  const postUrl = process.env.REACT_APP_API_URL + "/api/update-product-info";
  const getUrl = process.env.REACT_APP_API_URL + `/api/product-info/${productId}`

  const handleFileUpload = (evt) => {
    console.log("todo; handle upload");
  }

  const handleSaveBtn = async (evt) => {
    /** todo: validate form info is valid */
    const btn = evt.target;
    btn.disabled = true;
    console.log("save button clicked", formData);
    const response = await fetch(postUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
      method: "POST",
      body: JSON.stringify({ data: [{ ...formData, product_id: productId }] })
    });
    console.log("save response", response);
    btn.disabled = false;
  }

  const handleCancelBtn = (evt) => {
    const btn = evt.target;
    btn.disabled = true;

    console.log("cancelled");
    /** TODO: Reset the form */
    btn.disabled = false;
  }

  React.useEffect(() => {
    console.log("this is the apiurl", getUrl);
    fetch(getUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
      credentials: "include"
    }).then((response) => {
      return response.json();
    })
      .then((json) => {
        console.log("fetch response", json);
        setFormData(json[0]['data']);
      })
      .catch((err) => {
        console.log("error fetching data");
        console.error(err);
      });
  }, []);

  return (
    <MainApp>
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
                  <InputProvider value={{ name: "title_en" }}>
                    <InputLarge
                      inputSubtitleContainerProps={inputInformationLongProps.inputSubtitleContainerProps}
                      inputSubtitleContainerProps2={inputInformationLongProps.inputSubtitleContainerProps2}
                    />
                  </InputProvider>
                  <div className="input_small-container">
                    <InputProvider value={{ name: "product_number" }}>
                      <InputSmall
                        className={inputInformation21Props.className}
                        inputSubtitleContainerProps={inputInformation21Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "purity" }}>
                      <InputSmall2
                        className={inputInformation221Props.className}
                        inputSubtitleContainer2Props={inputInformation221Props.inputSubtitleContainer2Props}
                      />
                    </InputProvider>
                  </div>
                  <div className="input_small-container">
                    <InputProvider value={{ name: "shelf_life_months" }}>
                      <InputSmall3
                        inputSubtitleContainer3Props={inputInformation31Props.inputSubtitleContainer3Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "status" }}>
                      <InputSmall
                        className={inputInformation22Props.className}
                        inputSubtitleContainerProps={inputInformation22Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                  </div>
                  <div className="input_small-container">
                    <InputProvider value={{ name: "package" }}>
                      <InputSmall2
                        className={inputInformation222Props.className}
                        inputSubtitleContainer2Props={inputInformation222Props.inputSubtitleContainer2Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "other_purity" }}>
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
                  <InputProvider value={{ name: "title_cn" }}>
                    <InputSmall
                      className={inputInformation24Props.className}
                      inputSubtitleContainerProps={inputInformation24Props.inputSubtitleContainerProps}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "molecular_weight" }}>
                    <InputSmall4
                      inputSubtitleContainer4Props={inputInformation41Props.inputSubtitleContainer4Props}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "flash_point" }}>
                    <InputSmall2
                      className={inputInformation223Props.className}
                      inputSubtitleContainer2Props={inputInformation223Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "boiling_point" }}>
                    <InputSmall2
                      className={inputInformation224Props.className}
                      inputSubtitleContainer2Props={inputInformation224Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "standard_pkg", values: ['yes', 'no'] }}>
                    <InputOption
                      inputSubtitleContainerProps={inputOption1Props.inputSubtitleContainerProps}
                      btnOptionCombinationProps={inputOption1Props.btnOptionCombinationProps}
                    />
                  </InputProvider>
                </div>
                <div className="input_small-container-1">
                  <InputProvider value={{ name: "cas" }}>
                    <InputSmall5 />
                  </InputProvider>
                  <InputProvider value={{ name: "molecular_formula" }}>
                    <InputSmall4
                      inputSubtitleContainer4Props={inputInformation42Props.inputSubtitleContainer4Props}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "melting_point" }}>
                    <InputSmall2
                      className={inputInformation225Props.className}
                      inputSubtitleContainer2Props={inputInformation225Props.inputSubtitleContainer2Props}
                    />
                  </InputProvider>
                  <InputProvider value={{ name: "mfcd" }}>
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
                    <InputProvider value={{ name: "catalog_price" }}>
                      <InputSmall
                        className={inputInformation25Props.className}
                        inputSubtitleContainerProps={inputInformation25Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "closing_price" }}>
                      <InputSmall
                        className={inputInformation26Props.className}
                        inputSubtitleContainerProps={inputInformation26Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "invoice_type", values: ['commercial', 'personal'] }}>
                      <InputOption
                        inputSubtitleContainerProps={inputOption2Props.inputSubtitleContainerProps}
                        btnOptionCombinationProps={inputOption2Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "freight", values: ['yes', 'no'] }}>
                      <InputOption2
                        inputSubtitleContainer7Props={inputOption21Props.inputSubtitleContainer7Props}
                        btnOptionCombinationProps={inputOption21Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "tax_included", values: ['yes', 'no'] }}>
                      <InputOption
                        inputSubtitleContainerProps={inputOption3Props.inputSubtitleContainerProps}
                        btnOptionCombinationProps={inputOption3Props.btnOptionCombinationProps}
                      />
                    </InputProvider>

                    <InputProvider value={{ name: "hazardous", values: ['yes', 'no'] }}>
                      <InputOption2
                        inputSubtitleContainer7Props={inputOption22Props.inputSubtitleContainer7Props}
                        btnOptionCombinationProps={inputOption22Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "specialty", values: ['yes', 'no'] }}>
                      <InputOption3
                        inputSubtitleContainer3Props={inputOption31Props.inputSubtitleContainer3Props}
                        btnOptionCombinationProps={inputOption31Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "advantageous", values: ['yes', 'no'] }}>
                      <InputOption3
                        inputSubtitleContainer3Props={inputOption32Props.inputSubtitleContainer3Props}
                        btnOptionCombinationProps={inputOption32Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "customized", values: ['yes', 'no'] }}>
                      <InputOption2
                        inputSubtitleContainer7Props={inputOption23Props.inputSubtitleContainer7Props}
                        btnOptionCombinationProps={inputOption23Props.btnOptionCombinationProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "other_expenses" }}>
                      <InputSmall3
                        inputSubtitleContainer3Props={inputInformation32Props.inputSubtitleContainer3Props}
                      />
                    </InputProvider>
                  </div>
                  <div className="input_small-container-2">
                    <InputProvider value={{ name: "catalog_currency" }}>
                      <InputSmall
                        className={inputInformation27Props.className}
                        inputSubtitleContainerProps={inputInformation27Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "closing_currency" }}>
                      <InputSmall
                        className={inputInformation28Props.className}
                        inputSubtitleContainerProps={inputInformation28Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "selling_price" }}>
                      <InputSmall
                        className={inputInformation29Props.className}
                        inputSubtitleContainerProps={inputInformation29Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "freight_cost" }}>
                      <InputSmall2
                        className={inputInformation226Props.className}
                        inputSubtitleContainer2Props={inputInformation226Props.inputSubtitleContainer2Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "tax_rate" }}>
                      <InputSmall2
                        className={inputInformation227Props.className}
                        inputSubtitleContainer2Props={inputInformation227Props.inputSubtitleContainer2Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "price_expiration" }}>
                      <InputSmall7
                        inputSubtitleContainer7Props={inputInformation71Props.inputSubtitleContainer7Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "restrictions" }}>
                      <InputSmall7
                        inputSubtitleContainer7Props={inputInformation72Props.inputSubtitleContainer7Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "packaging_cost" }}>
                      <InputSmall4
                        inputSubtitleContainer4Props={inputInformation43Props.inputSubtitleContainer4Props}
                      />
                    </InputProvider>
                    <InputProvider value={{ name: "other_cost" }}>
                      <InputSmall
                        className={inputInformation210Props.className}
                        inputSubtitleContainerProps={inputInformation210Props.inputSubtitleContainerProps}
                      />
                    </InputProvider>
                  </div>
                </div>
                <InputProvider value={{ name: "comments" }}>
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
    </MainApp>
  );
}

export default ProductInfoEditaddProduct;
