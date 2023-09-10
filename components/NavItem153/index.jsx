import React from "react";
import IconRegular4 from "../IconRegular4";
import "./NavItem153.sass";

function NavItem153(props) {
  const { text_Label, component14Props } = props;

  return (
    <article className={`nav_item-84 ${props.className}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-83">
        <IconRegular4 src={component14Props.src} />
        <div className="text_label-134 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem153;
