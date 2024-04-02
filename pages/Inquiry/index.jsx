import React, { useState, useMemo } from 'react';
import TextItemContainer from "components/TextItemContainer";
import Btn3 from "components/Btn3";
import BtnFrameless3 from "components/BtnFrameless3/";
import "./Inquiry.sass";
import TextItemContainer from "components/TextItemContainer";
import Btn3 from "components/Btn3";
import SearchBox from "components/SearchBox";
import DropdownButtonList from "components/DropdownButtonList";
import Pagination from "components/Pagination";
import LimitedText from "components/LimitedText";
import "components/RadioButtonList";
import "components/InquiryItem";
import "./Inquiry.sass";
import MainApp from "components/MainApp";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";


function Inquiry() {
   const [selectAll, setSelectAll] = useState(false);

   // Assuming you have a list of inquiry items, each with an 'id'
   // For demonstration, let's say you fetch these from somewhere
   const [sections, setSections] = useState([
    {
      title: "您的报价已通过，请联系销售完成采购",
      items: [
        {
          id: 1,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "已通过"
        },
        {
          id: 5,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "已通过"
        },
        ,
        {
          id: 7,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "已通过"
        },
        // More...
      ]
    },
    {
      title: "进行中",
      items: [
        {
          id: 2,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "待研发报价"
        },
        {
          id: 3,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "未通过"
        },
        {
          id: 4,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "需补充材料"
        },
        // More...
      ]
    }
    
  ]);
 
  // Toggle 'Select All' checkbox
  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked); // Update the selectAll state
    // Update each item's selected state based on the selectAll state
    const updatedSections = sections.map((section) => ({
      ...section,
      items: section.items.map((item) => ({ ...item, selected: isChecked })),
    }));
    setSections(updatedSections);
  };

   // Define the countSelectedItems function
   const countSelectedItems = () => {
    return sections
      .flatMap(section => section.items) // Flatten the array of items from all sections
      .filter(item => item.selected).length; // Count only the selected items
    };
  
    // Use useMemo to only recompute the selectedItemCount when sections change
    const selectedItemCount = useMemo(() => {
      return countSelectedItems();
    }, [sections]);


  // Handle individual checkbox change
  const handleCheckboxChange = (sectionIndex, itemId) => {
    const newSections = sections.map((section, idx) => {
      if (idx === sectionIndex) {
        return {
          ...section,
          items: section.items.map(item =>
            item.id === itemId ? { ...item, selected: !item.selected } : item
          )
        };
      }
      return section;
    });
    setSections(newSections);
  };

  // Delete selected inquiries
  const deleteSelectedInquiries = () => {
    const updatedSections = sections.map(section => ({
      ...section,
      items: section.items.filter(item => !item.selected)
    }));
    setSections(updatedSections);
  };

  const [filter, setFilter] = useState('all'); // Possible values: 'all', 'approved', 'not-approved'
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <MainApp>
      <div className="main_container-3">
        <div className="cont-main">
        <div className="cont-main">
            <TitleWithBubbleBox
              title="报价管理"
              bubbleContent="Bubble Content for 报价管理"
              />  
          </div>
          </div>
          <div className="main-content-3">
            <div className="content">
              <div className="col-lg-12" style={{flex: 0}}>
                <div className="row">
                  <div className="col-lg-4 d-flex"  style={{paddingLeft:0}}>
                    <TextItemContainer number={selectedItemCount} text59="个询价" />
                    <div className="btn_option2 ml-2">
                    <input type="checkbox" className="btn_checkbox-3" checked={selectAll} onChange={handleSelectAllChange}/>
                      <div className="text-79 notosanssc-normal-granite-gray-16px">全选</div>
                    </div>
                  </div>
                  <div className="col-lg-8 d-flex justify-content-end">
                  <ul className='each-one'>
                  <li>
                      <input 
                        type="radio" 
                        id="all-option" 
                        name="selector" 
                        onChange={() => handleFilterChange('all-approved')} 
                      />
                      <label htmlFor="all-option">显示全部通过</label>
                      <div className="check"></div>
                    </li>
                    <li>
                      <input 
                        type="radio" 
                        id="f-option" 
                        name="selector" 
                        onChange={() => handleFilterChange('approved')} 
                      />
                      <label htmlFor="f-option">只显示已通过</label>
                      <div className="check"></div>
                    </li>
                    <li>
                      <input 
                        type="radio" 
                        id="s-option" 
                        name="selector" 
                        onChange={() => handleFilterChange('not-approved')} 
                      />
                      <label htmlFor="s-option">只显示未通过</label>
                      <div className="check">
                        <div className="inside"></div>
                      </div>
                    </li>
                  </ul>
                    <div className="btn_frameless-4 delete" onClick={deleteSelectedInquiries}>
                      <img className="icon_regular-90" src="/img/component-1-15@2x.png" alt="more" />
                      <div className="text_label-130 valign-text-middle notosanssc-medium-tundora-16px">删除</div>
                    </div>
                    <div className="btn_frameless-6">
                      <a href="" className="text_label-132 valign-text-middle notosanssc-medium-tundora-16px">更多</a>
                      <img className="icon_regular-92" src="/img/icon-more.png" alt="more" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-full">
                 
                  <SearchBox placeholder="输入产品名称、产品编号、询价单号进行搜索" />
                  <DropdownButtonList
                      icon={<img src="/img/component-1-8@2x.png" style={{ width: "19px" }} alt="Icon" />}
                      name="按处理状态排列"
                      items={[
                        { label: '按时间顺序排列', link: '#' },
                        { label: '按产品编号顺序排列', link: '#' },
                      ]}
                    />
                   <Btn3 />
              </div>
              <div className="inquiry_container">
                <div className="inquiry-menu_container-1">
                  <div className="flex-row-2">
                    <div className="valign-text-middle" style={{position: 'absolute', left: -20}}>询价单号</div>
                    <div className="text-81 valign-text-middle"  style={{position: 'absolute', left: 62}}>产品名称</div>
                    <div className="text-8-1 valign-text-middle"  style={{position: 'absolute', left: 312}}>完成时间</div>
                    <div className="cas valign-text-middle"  style={{position: 'absolute', left: 424}}>销售</div>
                    <div className="text-83 valign-text-middle"  style={{position: 'absolute', left: 512}}>状态</div>
                  </div>
                </div>
                {sections.map((section, index) => (
                  <>
                    <div className="sub-title">
                      <div className="category-title-22">
                        <div className="text-80 valign-text-middle notosanssc-normal-black-16px">{section.title}</div>
                        {section.title !== "进行中" && (
                          <img className="icon_regular-94" src="/img/icon-regular-18@2x.png" alt="icon_more" />
                        )}
                      </div>
                    </div>
                    {section.items.map((item) => (
                      <div className="inquiry-item" key={item.id}>
                        <div className="flex-row-3">
                          <input 
                            type="checkbox" 
                            className="btn_checkbox-3" 
                            checked={item.selected || false} 
                            onChange={() => handleCheckboxChange(index, item.id)} 
                          />
                          <div className="btn_text-14-1">
                            <div className="text_label-98 valign-text-middle order-number">{item.orderNumber}</div>
                          </div>
                          <div className="limit-weight">
                            <LimitedText className="product-name" text={item.productName} maxLength={16} />
                          </div>
                          <div className="text-button-2">
                            <div className="date valign-text-middle complete-time">{item.completeTime}</div>
                          </div>
                          <div className="text-button-2">
                            <div className="date valign-text-middle sale-person">{item.salesPerson}</div>
                          </div>
                          <div className="text-box-1">
                          <div
                            className={`status valign-text-middle ${
                              item.state === "已通过" ? "status-approved" :
                              item.state === "未通过" ? "status-not-approved" :
                              item.state === "需补充材料" ? "status-not-approved" :
                              item.state === "待研发报价" ? "status-pending-rnd-quote" :
                              ""
                            }`}
                          >
                            {item.state}
                          </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
                
              </div>
              <Pagination />
            </div>
          
          </div>
      </div>
    </MainApp>
  );
}

export default Inquiry;
