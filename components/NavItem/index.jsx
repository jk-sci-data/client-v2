import React from "react";
import "./NavItem.sass";

function NavItem(props) {
  const { component1, text_Label, className } = props;

  return (
    <a href={props.path}>
      <article className={`nav_item-11 ${className || ""}`}>
        <div className="nav_item_content">
          <img className="icon_regular-1" src={component1} alt="icon_regular" />
          <div className="text_label-13 valign-text-middle notosanssc-normal-shark-20px">{text_Label}</div>
        </div>
      </article>
    </a>
  );
}

export default NavItem;
