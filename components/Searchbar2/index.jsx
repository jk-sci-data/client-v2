import React from "react";
import "./Searchbar2.sass";

function Searchbar2(props) {
  const { text_Label, icon_Regular } = props;

  return (
    <div className="searchbar-2">
      <div className="text_label-147 valign-text-middle notosanssc-normal-quick-silver-20px">{text_Label}</div>
      <img className="icon_regular-99" src={icon_Regular} alt="icon_regular" />
    </div>
  );
}

export default Searchbar2;
