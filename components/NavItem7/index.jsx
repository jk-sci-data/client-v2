import React from "react";
import IconRegular6 from "../IconRegular6";
import "./NavItem7.sass";

function NavItem7(props) {
  const { iconRegular6Props } = props;

  return (
    <article className={`nav_item-60 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-59">
        <IconRegular6 src={iconRegular6Props.src} />
        <div className="text_label-71 valign-text-middle notosanssc-normal-shark-20px">产品证书上传</div>
      </div>
    </article>
  );
}

export default NavItem7;
