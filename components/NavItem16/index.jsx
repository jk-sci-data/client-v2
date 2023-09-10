import React from "react";
import "./NavItem16.sass";

function NavItem16(props) {
  const { icon_Regular, text_Label, className } = props;

  return (
    <article className={`nav_item-89 ${className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-88">
        <img className="icon_regular-103" src={icon_Regular} alt="icon_regular" />
        <div className="text_label-150 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem16;
