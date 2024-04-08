import React from "react";
import Button62 from "../Button62";
import SearchBar22 from "../SearchBar22";
import "./Frame437.sass";

function Frame437(props) {
  const { buttonProps, searchBar2Props } = props;

  return (
    <div className="search_container">
      <Button62 text_Label={buttonProps.text_Label} component1={buttonProps.component1} />
      <SearchBar22
        component1={searchBar2Props.component1}
        text_Label={searchBar2Props.text_Label}
        button2Props={searchBar2Props.button2Props}
      />
    </div>
  );
}

export default Frame437;
