import React from "react";
import TitleContainer from "components/TitleContainer";
import Frame437 from "components/Frame437";
import BtnFrameless from "components/BtnFrameless";
import FramelessButton42 from "components/FramelessButton42";
import HistorySubNav from "components/HistorySubNav";
import CategoryTitle22 from "components/CategoryTitle22";
import ProductHistoryItem from "components/ProductHistoryItem";
import Btn3 from "components/Btn3";
import SearchBox from "components/SearchBox";
import DropdownButtonList from "components/DropdownButtonList";
import DropdownButtonListTwo from "components/DropdownButtonListTwo";
import Pagination from "components/Pagination";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";



import "./History.sass";
import MainApp from "components/MainApp";

function History(props) {
  const {
    line6,
    titleContainerProps,
    searchContainerProps,
    btnFramelessProps,
    btnFrameless21Props,
    btnFrameless22Props, 
    historySubNavProps,
    categoryTitle1Props,
    productHistoryItem1Props, 
    productHistoryItem2Props,
    categoryTitle2Props,
    productHistoryItem3Props,
    productHistoryItem4Props,
    navPagenumberProps
  } = props;

  return (
    <MainApp>
      <div className="main_container-4">
      <div className="cont-main">
            <TitleWithBubbleBox
              title="历史记录"
              bubbleContent="Bubble Content for 历史记录"
              />  
          </div>
        <div className="main-content-4">
          <div className="content-1">
       
            <div className="search_sub-nav-1">
              <div className="overlap-group-45">
                <img className="line-6-1" src={line6} alt="Line 6" />
                <div className="sub-nav-item_container-1">
                  <BtnFrameless>{btnFramelessProps.children}</BtnFrameless>
                  <FramelessButton42>{btnFrameless21Props.children}</FramelessButton42>
                  <FramelessButton42>{btnFrameless22Props.children}</FramelessButton42>
                </div>
              </div>
            </div>
            <div className="ory_container">
            <div className="frame-full">
            <HistorySubNav number={8} />
                  <DropdownButtonListTwo
                    icon={<img src="/img/icon-more.png" style={{ width: "19px" }} alt="Icon" />}
                    name="最近3个月"
                    items={[
                      { label: '最近6个月', link: '#' },
                      { label: '最近9个月', link: '#' },
                    ]}
                  />
              </div>
              <div className="frame-full">
             
   

                <Btn3 />
                <DropdownButtonList
                    icon={<img src="/img/component-1-8@2x.png" style={{ width: "19px" }} alt="Icon" />}
                    name="按加入时间排列"
                    items={[
                      { label: '按时间顺序排列', link: '#' },
                      { label: '按产品编号顺序排列', link: '#' },
                    ]}
                  />

                <SearchBox />   
              </div>
              <div className="ory_container">
                <CategoryTitle22 categoryTitle3Props={categoryTitle1Props.categoryTitle3Props} />
                <div className="history-column">
                  <ProductHistoryItem
                    productNameProps={productHistoryItem1Props.productNameProps}
                    dataContainerProps={productHistoryItem1Props.dataContainerProps}
                  />
                  <ProductHistoryItem
                    className={productHistoryItem2Props.className}
                    productNameProps={productHistoryItem2Props.productNameProps}
                    dataContainerProps={productHistoryItem2Props.dataContainerProps}
                  />
                </div>
              </div>
              <div className="ory_container">
                <CategoryTitle22 categoryTitle3Props={categoryTitle2Props.categoryTitle3Props} />
                <div className="history-column">
                  <ProductHistoryItem
                    className={productHistoryItem3Props.className}
                    productNameProps={productHistoryItem3Props.productNameProps}
                    dataContainerProps={productHistoryItem3Props.dataContainerProps}
                  />
                  <ProductHistoryItem
                    className={productHistoryItem4Props.className}
                    productNameProps={productHistoryItem4Props.productNameProps}
                    dataContainerProps={productHistoryItem4Props.dataContainerProps}
                  />
                </div>
              </div>
            </div>
            <Pagination />
          </div>
         
        </div>
      </div>
    </MainApp>
  );
}

export default History;
