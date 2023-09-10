import React from "react";
import IconRegular7 from "../IconRegular7";
import "./NavItem1323.sass";

function NavItem1323(props) {
  const { text_Label, component17Props } = props;

  return (
    <article className={`nav_item-70 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-69">
        <IconRegular7 vector109={component17Props.vector109} subtract={component17Props.subtract} />
        <div className="text_label-81 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem1323;
