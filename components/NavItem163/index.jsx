import React from "react";
import Component13 from "../Component13";
import "./NavItem163.sass";

function NavItem163(props) {
  const { text_Label, component13Props } = props;

  return (
    <article className={`nav_item-85 ${props.className || ""}`} onClick={props.onClick || (() => {})}>
      <div className="nav_item_content-84">
        <Component13
          subtract={component13Props.subtract}
          vector54={component13Props.vector54}
          vector55={component13Props.vector55}
        />
        <div className="text_label-136 valign-text-middle notosanssc-normal-stiletto-20px">{text_Label}</div>
      </div>
    </article>
  );
}

export default NavItem163;
