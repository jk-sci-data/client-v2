import React from "react";
import IconRegular4 from "../IconRegular4";
import "./NavItem52.sass";

function NavItem52(props) {
  const { component14Props } = props;

  return (
    <article className={`nav_item-41 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-40">
        <IconRegular4 src={component14Props.src} className={component14Props.className} />
        <div className="text_label-52 valign-text-middle notosanssc-normal-shark-20px">历史记录</div>
      </div>
    </article>
  );
}

export default NavItem52;
