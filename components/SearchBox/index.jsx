import React from "react";
import "./SearchBox.sass";

// Update the function to accept props
function SearchBox(props) {
  // Extract the placeholder prop from props, with a default value
  const {
    placeholder = "输入产品名称、CAS进行搜索", // Default placeholder text
    buttonImgSrc = "/img/component-1-7@2x.png" // Default image source for the button
  } = props;

  return (
    <div className="search-box-new">
      <input
        type="text"
        placeholder={placeholder} // Use the extracted placeholder prop
        className="search-input"
      />
      <button>
        <img
          src={buttonImgSrc} // Use the extracted buttonImgSrc prop for the image source
          alt="Search Icon"
          className="search-icon"
        />
      </button>
    </div>
  );
}

export default SearchBox;
