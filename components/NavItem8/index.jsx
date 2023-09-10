import React from "react";
import IconRegular7 from "../IconRegular7";
import "./NavItem8.sass";

function NavItem8(props) {
  const { iconRegular7Props } = props;

  return (
    <article className={`nav_item-72 ${props.className}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-71">
        <IconRegular7
          vector109={iconRegular7Props.vector109}
          subtract={iconRegular7Props.subtract}
          className={iconRegular7Props.className}
        />
        <div className="text_label-107 valign-text-middle notosanssc-normal-shark-20px">询报价记录查询</div>
      </div>
    </article>
  );
}

export default NavItem8;
