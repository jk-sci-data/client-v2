import React, { useState, useEffect } from "react";
import TitleContainer from "components/TitleContainer";
import TextItemContainer from "components/TextItemContainer";
import BtnOption22 from "components/BtnOption22";
import BtnFrameless4 from "components/BtnFrameless4";
import Btn22 from "components/Btn22";
import Btn3 from "components/Btn3";
import Btn4 from "components/Btn4";
import Searchbar2 from "components/Searchbar2";
import CategoryTitle5 from "components/CategoryTitle5";
import ProductItem from "components/ProductItem";
import CategoryTitle6 from "components/CategoryTitle6";
import NavPagenumber from "components/NavPagenumber";
import "./ProductInfo.sass";
import MainApp from "components/MainApp";

function ProductInfoTable({ data }) {
  console.log("productinfotable data", data);
  return (data &&
    <div className="product_container">
      <div className="product-menu_container">
        <div className="flex-row-5 notosanssc-medium-granite-gray-16px" style={{ gap: "10px", textAlign: "left", margin: "6px 23px" }}>
          <div style={{ width: "1em" }}></div>
          <div style={{ flexGrow: "1" }}>{"产品名称"}</div>
          <div style={{ width: "8em" }}>{"产品编号"}</div>
          <div style={{ width: "8em" }}>{"CAS号"}</div>
          <div style={{ width: "8em" }}>{"包装"}</div>
        </div>
      </div>
      {
        data.map((d, i) => {
          console.log("data entry", d)
          const { items, category } = d;
          return (
            <div key={i} style={{ width: "100%" }}>
              <CategoryTitle5 props={category} />
              <div className="product-item_container">
                <div className="product-column">
                  {
                    items.map((productItem, j) => (
                      <ProductItem key={j} {...productItem} />
                    ))
                  }
                </div>
              </div>
            </div>
          )
        })
      }
      <NavPagenumber buttons={/*todo: add props currPage, totalPage */[
        { text: "1", active: false },
        { text: "2", active: false },
        { text: "3", active: false },
        { text: "4", active: true },
        { text: "...", active: false },
        { text: "11", active: false },
        { text: "12", active: false },
      ]}
      />
    </div>
  )
}

function ProductInfo(props) {
  const {
    titleContainerProps,
    textItemContainerProps,
    btn2Props,
    btn4Props,
    searchbar2Props,
    categoryTitle5Props,
    productItem1Props,
    productItem2Props,
    categoryTitle6Props,
    productItem3Props,
    productItem4Props,
    productItem5Props,
    productItem6Props,
    productItem7Props,
    productItem8Props,
    productItem9Props,
    productItem10Props,
    navPagenumberProps,
  } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    const getUrl = process.env.REACT_APP_API_URL + `/api/product-info`;
    fetch(getUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      },
      credentials: "include"
    })
    .then(async (response) => {
      const json = await response.json();
      console.log("data response", json);

      const items = json.map((d) => ({
        productName: d.data['title_en'] || "???",
        productName2: d.data['title_cn'] || "",
        casNumber: d.data['cas'] || "???",
        productNumber: d.data['product_number'] || "???",
        sizeNumber: "1L",
        productId: d.data['product_id']
        /* 
        productName: "Bis(tertbutylperoxyisopropyl)benzenewrtgadfafc, fawrgtqfgasdfasdffafddf, 96%",
        productName2: "双[1-(叔丁基过氧)-1-甲基乙基]苯",
        casNumber: "1543516-1",
        productNumber: "351351351",
        sizeNumber: "1L",
        productId: 3
        */
      }));

      setData([
        {category: "Search results", items: items}
      ])
    })
    .catch((err) => {
      console.log("error fetching data");
      console.error(err);
    });

    // const _data = [
    //   {
    //     category: categoryTitle5Props,
    //     items: [
    //       productItem1Props,
    //       productItem2Props,
    //     ]
    //   },
    //   {
    //     category: categoryTitle6Props,
    //     items: [
    //       productItem3Props,
    //       productItem4Props,
    //       productItem5Props,
    //       productItem6Props,
    //       productItem7Props,
    //       productItem8Props,
    //       productItem9Props,
    //       productItem10Props
    //     ]
    //   }
    // ];
    // setData(_data);
  }, []);


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
            <div className="middle_sub-nav">
              <Btn3 />
              <Btn4 text_Label={btn4Props.text_Label} />
              <Searchbar2 style={{ flexGrow: 1 }} text_Label={searchbar2Props.text_Label} icon_Regular={searchbar2Props.icon_Regular} />
            </div>
          </div>
          {data && <ProductInfoTable data={data} />}
        </div>
      </div>
    </MainApp>
  );
}

export default ProductInfo;
