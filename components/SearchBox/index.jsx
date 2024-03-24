import React from "react";
import "./SearchBox.sass";

// Update the function to accept props
function SearchBox(props) {
  // Extract the placeholder prop from props, with a default value
  const { placeholder = "输入产品名称、CAS进行搜索" } = props;

  return (
    <div className="search-box-new">
      <input
        type="text"
        placeholder={placeholder} // Use the extracted placeholder prop
        className="search-input"
      />
      <img
        src="/img/component-1-7@2x.png"
        alt="Search Icon"
        className="search-icon"
      />
    </div>
  );
}

export default SearchBox;
