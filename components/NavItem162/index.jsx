import React from "react";
import IconRegular6 from "../IconRegular6";
import "./NavItem162.sass";

function NavItem162(props) {
  const { text_Label, iconRegular6Props } = props;

  return (
    <article className={`nav_item-71 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-70">
        <IconRegular6 src={iconRegular6Props.src} />
        <div className="text_label-106 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem162;
