import React from "react";
import Component1 from "../Component1";
import "./NavItem12.sass";

function NavItem12(props) {
  const { text_Label, component1Props } = props;

  return (
    <article className={`nav_item-88 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-87">
        <Component1 clipboardDarkGreyProps={component1Props.clipboardDarkGreyProps} />
        <div className="text_label-148 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem12;
