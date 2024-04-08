import React from "react";
import "./Searchbar2.sass";

function Searchbar2(props) {
  const { text_Label, icon_Regular, style } = props;

  return (
    <div className="searchbar-2" style={style}>
      <input type="text" 
        className="text_label-147 valign-text-middle notosanssc-normal-quick-silver-20px" 
        placeholder={text_Label}
        style={{width:"100%", border:"none", background:"transparent"}}
        />
      <img className="icon_regular-99" src={icon_Regular} alt="icon_regular" />
    </div>
  );
}

export default Searchbar2;
