import React from "react";
import Btn22 from "../Btn22";
import "./SearchBar22.sass";

function SearchBar22(props) {
  const { component1, text_Label, button2Props } = props;

  return (
    <div className="searchbar">
      <div className="search-box">
        <img className="icon_regular-78" src={component1} alt="icon_regular" />
        <div className="text_label-85 valign-text-middle notosanssc-normal-quick-silver-20px">{text_Label}</div>
      </div>
      <Btn22>{button2Props.children}</Btn22>
    </div>
  );
}

export default SearchBar22;
