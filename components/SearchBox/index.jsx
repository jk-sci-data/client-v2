import React from "react";
import "./SearchBox.sass";

function SearchBox(props) {
  const {
    placeholder = "输入产品名称、CAS进行搜索",
    buttonImgSrc = "/img/component-1-7@2x.png",
    onInputChange 
  } = props;

  return (
    <div className="search-box-new">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onInputChange} 
        className="search-input"
      />
      <button>
        <img
          src={buttonImgSrc}
          alt="Search Icon"
          className="search-icon"
        />
      </button>
    </div>
  );
}

export default SearchBox;
