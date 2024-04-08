import React from "react";
import "./SideNavMenu.sass";

import { SideNavContext } from "contexts";

function NavItem(props) {
  const activeClass = "nav_item_active";
  const active = window.location.pathname === props.path;
  return (
    <a href={props.path}>
      <article className={`nav_item-11 ${active ? activeClass : ""}`}>
        <div className="nav_item_content">
          <img className="icon_regular-1" src={active ? props.iconRed : props.iconGray} alt={props.label} />
          <div className="text_label-13 valign-text-middle notosanssc-normal-shark-20px">{props.label}</div>
        </div>
      </article>
    </a>
  );
}

function SubNavContainer(props) {
  const {sideNavSettings} = React.useContext(SideNavContext);

  return (
    <div className="subnav_container-28">
      <div className="text-124 notosanssc-bold-tundora-26px">{props.label}</div>
      <img className="line-4-17" src={sideNavSettings.lineImg} alt="Line 4" />
      <div className="subnav-28"> {
        props.items.map((t, i) => <NavItem key={i} {...t}/>)
      }
      </div>
    </div>
  )
}

function SideNavMenu() {
  const { sideNavSettings } = React.useContext(SideNavContext);

  return (
    <div className="nav-6" style={{justifyContent:"start"}}>{
      sideNavSettings['groups'].map((g, i) => <SubNavContainer key={i} {...g} />)
    }
    </div>
  );
}

export default SideNavMenu;
