import React, { useMemo, useEffect, useRef, useContext } from "react";
import TitleContainer from "components/TitleContainer";
import TextItemContainer from "components/TextItemContainer";
import BtnOption22 from "components/BtnOption22";
import BtnFrameless4 from "components/BtnFrameless4";
import Btn22 from "components/Btn22";
import Btn3 from "components/Btn3";
import Btn4 from "components/Btn4";
import Searchbar2 from "components/Searchbar2";
import "./ProductInfo.sass";
import MainApp from "components/MainApp";
import ProductInfoTable from "./ProductInfoTable";
import { InputContext, InputProvider } from "contexts/InputContext";
import { ProductInfoContext, ProductInfoProvider } from "./ProductInfoContext";

function ProductInfoContent(props) {
  const {
    titleContainerProps,
    textItemContainerProps,
    btn2Props,
    btn4Props,
    searchbar2Props,
  } = props;

  const ctx = useContext(ProductInfoContext) || {};
  const {
    tableData: data,
    isLoading,
    refetch: dataFetch,
    form, searchTerm
  } = ctx;

  useEffect(() => {
    console.log("tableData:", data);
  }, [data]);
  
  const { register, control } = form || {};

  const handlePressEnter = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      handleRefresh();
    }
  }

  const handleRefresh = () => {
    const searchTermTrim = (searchTerm || "").trim();
    console.log("handleRefresh called", searchTermTrim)
    if (!searchTermTrim) return;
    dataFetch({ queryKey: ['product-search', searchTermTrim] });
  };

  return (
    <MainApp>
      <div className="main_container-7">
        <TitleContainer>{titleContainerProps.children}</TitleContainer>
        <div className="main-content-6">
          <div className="content-2">
            <div className="top_sub-nav-1">
              <TextItemContainer number={textItemContainerProps.number} text59={textItemContainerProps.text59} />
              <div className="btn-item_container-2">
                <BtnOption22 />
                <BtnFrameless4 />
                <Btn22>{btn2Props.children}</Btn22>
              </div>
            </div>
            <div className="middle_sub-nav">{/** search bar */}
              <InputProvider form={form} field={register("searchTerm")}>
                <Btn3 onClick={handleRefresh} disabled={isLoading ?? false} />
                <Btn4 text_Label={btn4Props.text_Label} />
                <Searchbar2 onKeyDown={handlePressEnter} style={{ flexGrow: 1 }} text_Label={searchbar2Props.text_Label} icon_Regular={searchbar2Props.icon_Regular} />
              </InputProvider>
            </div>
          </div>
          <ProductInfoTable data={data} />
        </div>
      </div>
    </MainApp>
  );
}

function ProductInfo(props) {
  return (
    <ProductInfoProvider>
      <ProductInfoContent {...props} />
    </ProductInfoProvider>
  );
}
export default ProductInfo;
