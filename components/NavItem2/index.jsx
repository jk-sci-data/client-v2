import React from "react";
import Component1 from "../Component1";
import "./NavItem2.sass";

function NavItem2(props) {
  const { component1Props } = props;

  return (
    <article className={`nav_item-12 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className={`nav_item_content-11 ${props.className || ""}`}>
        <Component1 clipboardDarkGreyProps={component1Props.clipboardDarkGreyProps} />
        <div className="text_label-14 valign-text-middle notosanssc-normal-shark-20px">资质证照</div>
      </div>
    </article>
  );
}

export default NavItem2;
