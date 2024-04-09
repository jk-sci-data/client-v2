import React, { useState, useMemo, useEffect } from 'react';
import TextItemContainer from "components/TextItemContainer";
import Btn3 from "components/Btn3";
import "./Inquiry.sass";
import SearchBox from "components/SearchBox";
import Pagination from "components/Pagination";
import Dropdown from "components/Dorpdown";
import MainApp from "components/MainApp";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import SearchBtn from "../../static/img/component-1-7@2x.png";



function Inquiry() {
 
   // fake data
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
          state: "已通过",
          orderLink: "/inquiry-item" 
        },
        {
          id: 2,
          orderNumber: "45135151533",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2021/6/27",
          salesPerson: "齐姝燕",
          state: "已通过"
        },
        {
          id: 3,
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
          id: 4,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "待研发报价"
        },
        {
          id: 5,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "未通过"
        },
        {
          id: 6,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "需补充材料"
        },
        {
          id: 7,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "未通过"
        },
        {
          id: 8,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "需补充材料"
        },
        {
          id: 9,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "需补充材料"
        },
        {
          id: 10,
          orderNumber: "45135151532",
          productName: "化合物B[双(2-甲基丙烯酸乙酯)-1-乙基]氧化物",
          completeTime: "2023/7/15",
          salesPerson: "李雷",
          state: "未通过"
        },
        {
          id: 11,
          orderNumber: "45135151531",
          productName: "双[1-(叔丁基过氧)-1-甲基乙基]苯甲基乙",
          completeTime: "2023/6/27",
          salesPerson: "齐姝燕",
          state: "需补充材料"
        },
      ]
    }
    
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filteredItems, setFilteredItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [selectAll, setSelectAll] = useState(false);

  

  useEffect(() => {
    const searchQuery = inputValue.trim().toLowerCase();
    const filteredItems = sections.flatMap(section =>
      section.items.filter(item =>
        item.productName.toLowerCase().includes(searchQuery) ||
        item.orderNumber.includes(searchQuery)
      )
    );
    setFilteredItems(filteredItems);
    setCurrentPage(1);
  }, [inputValue, sections]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Flatten the items array
  const allItems = useMemo(() => sections.flatMap(section => section.items), [sections]);

  // Determine which items to display
  let displayItems = useMemo(() => {
    if (currentFilter === 'all') {
      return filteredItems.length > 0 ? filteredItems : allItems;
    } else {
      const filterCondition = currentFilter === '已通过' ? '已通过' : ['未通过', '需补充材料', '待研发报价'];
      return (filteredItems.length > 0 ? filteredItems : allItems).filter(item =>
        currentFilter === '已通过' ? item.state === filterCondition : filterCondition.includes(item.state)
      );
    }
  }, [filteredItems, allItems, currentFilter]);

  // Calculate total pages
  const totalPages = Math.ceil(displayItems.length / itemsPerPage);

  // Calculate items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDisplayItems = displayItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle next page navigation
  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  // Handle previous page navigation
  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  // Toggle 'Select All' checkbox
  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked); 
    const updatedSections = sections.map((section) => ({
      ...section,
      items: section.items.map((item) => ({ ...item, selected: isChecked })),
    }));
    setSections(updatedSections);
  };

  const selectedItemCount = useMemo(() => {
      return currentDisplayItems.filter(item => item.selected).length;
  }, [currentDisplayItems]);

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

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const dropdownOptions = ['按处理状态排列', '按时间顺序排列', '按产品编号顺序排列'];
  const sortProducts = (option) => {
    let sortedSections = sections.map(section => {
      let sortedItems = [...section.items];
      switch (option) {
        case '按处理状态排列':
          sortedItems.sort((a, b) => a.state.localeCompare(b.state));
          break;
        case '按时间顺序排列':
          sortedItems.sort((a, b) => new Date(a.completeTime) - new Date(b.completeTime));
          break;
        case '按产品编号顺序排列':
          sortedItems.sort((a, b) => a.orderNumber.localeCompare(b.orderNumber));
          break;
        default:
          break; 
      }
      return { ...section, items: sortedItems };
    });
    setSections(sortedSections);
  };
  const [currentSortOption, setCurrentSortOption] = useState('按处理状态排列');

  const handleSortIconClick = () => {
    const options = ['按处理状态排列', '按时间顺序排列', '按产品编号顺序排列'];
    const nextIndex = (options.indexOf(currentSortOption) + 1) % options.length;
    const nextOption = options[nextIndex];
    
    setCurrentSortOption(nextOption);
    sortProducts(nextOption);
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
                          onChange={() => handleFilterChange('all')}
                          checked={currentFilter === 'all'}
                        />
                        <label htmlFor="all-option">显示全部通过</label>
                        <div className="check"></div>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="f-option"
                          name="selector"
                          onChange={() => handleFilterChange('已通过')}
                          checked={currentFilter === '已通过'}
                        />
                        <label htmlFor="f-option">只显示已通过</label>
                        <div className="check"></div>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="s-option"
                          name="selector"
                          onChange={() => handleFilterChange('未通过')}
                          checked={currentFilter === '未通过'}
                        />
                        <label htmlFor="s-option">只显示未通过</label>
                        <div className="check"></div>
                      </li>
                    </ul>
                    <div className="delete-img" onClick={deleteSelectedInquiries}>
                      <img src="/img/component-1-15@2x.png" alt="more" />
                      <div className="text valign-text-middle notosanssc-medium-tundora-16px">删除</div>
                    </div>
                    <div className="more-img">
                      <a href="" className="text_label-132 valign-text-middle notosanssc-medium-tundora-16px">更多</a>
                      <img src="/img/icon-more.png" alt="more" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-full">
                <SearchBox placeholder="输入产品名称、产品编号、询价单号进行搜索" buttonImgSrc={SearchBtn} onInputChange={handleInputChange}/>
                <Dropdown options={dropdownOptions} onOptionSelected={sortProducts} />
                <div className="btn-11" onClick={handleSortIconClick}>
                  <img className="icon_regular-80" src="/img/icon-regular-14@2x.png" alt="icon_regular" />
                </div>

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
                {sections.map((section, sectionIndex) => (
                  <>
                    <div className="sub-title">
                      <div className="category-title-22">
                        <div className="text-80 valign-text-middle notosanssc-normal-black-16px">{section.title}</div>
                        {section.title !== "进行中" && (
                          <img className="icon_regular-94" src="/img/icon-regular-18@2x.png" alt="icon_more" />
                        )}
                      </div>
                    </div>
                    {currentDisplayItems
                      .filter(item => {
                        // If the section title is "您的报价已通过，请联系销售完成采购", only include items with state '已通过'
                        if (section.title === "您的报价已通过，请联系销售完成采购") {
                          return item.state === '已通过';
                        }
                        // For the "进行中" section, include items with any other state
                        return section.title === "进行中" && item.state !== '已通过';
                      })
                      .map((item) => (
                        <div key={item.id} className="inquiry-item">
                          <div className="flex-row-3">
                            <input 
                              type="checkbox" 
                              className="btn_checkbox-3" 
                              checked={item.selected || false} 
                              onChange={() => handleCheckboxChange(sectionIndex, item.id)}
                            />
                            <div className="btn_text-14-1">
                              <span className="text_label-98 valign-text-middle order-number clickable">{item.orderNumber}</span>
                            </div>
                            <div className="limit-weight">
                              <div style={{ width: '220px' }}>
                                <div className="date valign-text-middle">{item.productName.length > 20 ? `${item.productName.substring(0, 17)}...` : item.productName}</div>
                              </div>
                            </div>
                            <div className="text-button-2">
                              <div className="date valign-text-middle complete-time">{item.completeTime}</div>
                            </div>
                            <div className="text-button-2">
                              <div className="date valign-text-middle sale-person">{item.salesPerson}</div>
                            </div>
                            <div className="text-box-1">
                              <div className={`status valign-text-middle ${
                                item.state === "已通过" ? "status-approved" :
                                item.state === "未通过" ? "status-not-approved" :
                                item.state === "需补充材料" ? "status-need-more-materials" :
                                item.state === "待研发报价" ? "status-pending-rnd-quote" : ""
                                }`}>
                                {item.state}
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </>
                ))}

              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
      </div>
    </MainApp>
  );
}

export default Inquiry;



