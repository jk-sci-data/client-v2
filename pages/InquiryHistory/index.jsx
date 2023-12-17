import React from "react";
import TitleContainer from "components/TitleContainer";
import Frame437 from "components/Frame437";
import BtnFrameless from "components/BtnFrameless";
import FramelessButton42 from "components/FramelessButton42";
import HistorySubNav from "components/HistorySubNav";
import CategoryTitle22 from "components/CategoryTitle22";
import InquiryHistoryColumn from "components/InquiryHistoryColumn";
import Btn3 from "components/Btn3";
import SearchBox from "components/SearchBox";
import DropdownButtonList from "components/DropdownButtonList";
import DropdownButtonListTwo from "components/DropdownButtonListTwo";
import Pagination from "components/Pagination";
import HistorySubNav from "components/HistorySubNav";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";


import "./InquiryHistory.sass";
import MainApp from "components/MainApp";
/*
import SearchBox DropdownButtonList DropdownButtonListTwo";
 */
function InquiryHistory(props) {
  const {
    line6,
    text17,
    text13,
    text12,
    cas,
    text15,
    text16,
    text14,
    titleContainerProps,
    frame437Props,
    btnFramelessProps,
    framelessButton42Props,
    historySubNavProps,
    categoryTitle221Props,
    inquiryHistoryColumn1Props,
    categoryTitle222Props,
    inquiryHistoryColumn2Props,
    navPagenumberProps,
    
  } = props;

  return (
    <MainApp>
      <div className="main_container">
        <div className="cont-main">
            <TitleWithBubbleBox
              title="报价记录"
              bubbleContent="Bubble Content for 报价记录"
              />  
          </div>
        <div className="main-content">
        <div className="cont">
           
            <div className="search_sub-nav">
              <div className="overlap-group">
                <img className="line-6" src={line6} alt="Line 6" />
                <div className="sub-nav-item_container">
                  <BtnFrameless>{btnFramelessProps.children}</BtnFrameless>
                  
                  <FramelessButton42>{framelessButton42Props.children}</FramelessButton42>
                </div>
              </div>
            </div>
            <div className="cont">
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
              <div className="inquiry-menu_container">
                <div className="flex-row notosanssc-medium-granite-gray-16px">
                  <div className="text-28 valign-text-middle">{text17}</div>
                  <div className="text-24 valign-text-middle">{text13}</div>
                  <div className="flex-row-item valign-text-middle">{text12}</div>
                  <div className="flex-row-item valign-text-middle">{cas}</div>
                  <div className="text-2-1 valign-text-middle">{text15}</div>
                  <div className="text-2-1 valign-text-middle">{text16}</div>
                  <div className="flex-row-item valign-text-middle">{text14}</div>
                </div>
              </div>
              <CategoryTitle22 categoryTitle3Props={categoryTitle221Props.categoryTitle3Props} />
              <InquiryHistoryColumn
                inquiryHistoryItem1Props={inquiryHistoryColumn1Props.inquiryHistoryItem1Props}
                inquiryHistoryItem2Props={inquiryHistoryColumn1Props.inquiryHistoryItem2Props}
                inquiryHistoryItem3Props={inquiryHistoryColumn1Props.inquiryHistoryItem3Props}
                inquiryHistoryItem4Props={inquiryHistoryColumn1Props.inquiryHistoryItem4Props}
              />
              <CategoryTitle22 categoryTitle3Props={categoryTitle222Props.categoryTitle3Props} />
              <InquiryHistoryColumn
                inquiryHistoryItem1Props={inquiryHistoryColumn2Props.inquiryHistoryItem1Props}
                inquiryHistoryItem2Props={inquiryHistoryColumn2Props.inquiryHistoryItem2Props}
                inquiryHistoryItem3Props={inquiryHistoryColumn2Props.inquiryHistoryItem3Props}
                inquiryHistoryItem4Props={inquiryHistoryColumn2Props.inquiryHistoryItem4Props}
              />
            </div>
            <Pagination />
          </div>
      
        </div>
      </div>
    </MainApp>
  );
}

export default InquiryHistory;
