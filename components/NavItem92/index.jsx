import React from "react";
import Component12 from "../Component12";
import "./NavItem92.sass";

function NavItem92(props) {
  const { component12Props } = props;

  return (
    <article className={`nav_item-86 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-85">
        <Component12
          overlapGroup={component12Props.overlapGroup}
          subtract={component12Props.subtract}
          className={component12Props.className}
        />
        <div className="text_label-141 valign-text-middle notosanssc-normal-stiletto-20px">编辑产品信息</div>
      </div>
    </article>
  );
}

export default NavItem92;
