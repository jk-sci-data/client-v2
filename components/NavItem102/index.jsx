import React from "react";
import Component13 from "../Component13";
import "./NavItem102.sass";

function NavItem102(props) {
  const { component13Props } = props;

  return (
    <article className={`nav_item-31 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-30">
        <Component13
          subtract={component13Props.subtract}
          vector54={component13Props.vector54}
          vector55={component13Props.vector55}
        />
        <div className="text_label-42 valign-text-middle notosanssc-normal-shark-20px">产品批量上传</div>
      </div>
    </article>
  );
}

export default NavItem102;
