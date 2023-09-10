import React from "react";
import IconRegular5 from "../IconRegular5";
import "./NavItem152.sass";

function NavItem152(props) {
  const { iconRegular5Props } = props;

  return (
    <article className={`nav_item-82 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-81">
        <IconRegular5
          vector11={iconRegular5Props.vector11}
          subtract={iconRegular5Props.subtract}
          vector12={iconRegular5Props.vector12}
        />
        <div className="text_label-117 valign-text-middle notosanssc-normal-stiletto-20px">在线报价</div>
      </div>
    </article>
  );
}

export default NavItem152;
