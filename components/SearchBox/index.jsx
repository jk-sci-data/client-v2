// SearchBox.js
import React from "react";
import "./SearchBox.sass"; 

function SearchBox() {
  return (
    <div className="search-box-new">
      <input type="text" placeholder="输入产品名称、CAS进行搜索" className="search-input" />
      <img
        src="/img/component-1-7@2x.png" 
        alt="Search Icon"
        className="search-icon"
      />
    </div>
  );
}

export default SearchBox;
