import React, { useState, useEffect, useRef } from "react";
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
import useAsync from "hooks/useAsync2";
import useForm from "hooks/useForm";
import ProductInfoTable from "./ProductInfoTable";
import { InputContext, InputProvider } from "contexts/InputContext";

function ProductInfo(props) {
  const {
    titleContainerProps,
    textItemContainerProps,
    btn2Props,
    btn4Props,
    searchbar2Props,
  } = props;

  const [data, setData] = useState(null);
  const form = useForm();

  const dataFetch = useAsync(async (searchTerm) => {
    console.log("dataFetching...", searchTerm);
    const queryParams = new URLSearchParams({
      "filter": `title eq '~~%${searchTerm}%'`
    });

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
      credentials: "include"
    });

    const resData = await res.json();
    console.log("/api/product data", resData);

    const items = resData.map((d) => ({
      productName: d['title_en'] ?? d['title'] ?? "???",
      productName2: d['title_cn'] || "",
      casNumber: d['cas'] || "???",
      productNumber: d['product_number'] || "???",
      sizeNumber: d['size'] || "???",
      productId: d['product_id'] || "######",
      selected: false //determines if checkbox is active
    }));

    return items;
  });

  useEffect(() => {
    console.log("dataFetching", dataFetch);
    if (dataFetch.loading) return;

    setData(dataFetch.data || []);
  }, [dataFetch.data, dataFetch.loading]);

  const handleRefresh = (evt) => {
    const searchTerm = (form.data['searchTerm'] ?? "").trim();
    if (!searchTerm) {
      console.error("No search term!");
      return;
    }
    dataFetch.run([searchTerm]);
  };

  const handlePressEnter = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      handleRefresh();
    }
  }

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
              <InputProvider form={form} name={"searchTerm"}>
                <Btn3 onClick={handleRefresh} disabled={dataFetch.loading ?? false} />
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

export default ProductInfo;
