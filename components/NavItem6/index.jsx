import React from "react";
import IconRegular5 from "../IconRegular5";
import "./NavItem6.sass";

function NavItem6(props) {
  const { iconRegular5Props } = props;

  return (
    <article className={`nav_item-51 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-50">
        <IconRegular5
          vector11={iconRegular5Props.vector11}
          subtract={iconRegular5Props.subtract}
          vector12={iconRegular5Props.vector12}
        />
        <div className="text_label-62 valign-text-middle notosanssc-normal-shark-20px">在线报价</div>
      </div>
    </article>
  );
}

export default NavItem6;
