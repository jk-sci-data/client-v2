import React from "react";
import Component12 from "../Component12";
import "./NavItem3.sass";

function NavItem3(props) {
  const { component12Props } = props;

  return (
    <article className={`nav_item-22 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-21">
        <Component12 overlapGroup={component12Props?.overlapGroup} subtract={component12Props?.subtract} />
        <div className="text_label-33 valign-text-middle notosanssc-normal-shark-20px">编辑产品信息</div>
      </div>
    </article>
  );
}

export default NavItem3;
