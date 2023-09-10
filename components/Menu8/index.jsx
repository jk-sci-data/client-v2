import React from "react";
import SubnavContainer from "../SubnavContainer";
import NavItem92 from "../NavItem92";
import NavItem102 from "../NavItem102";
import NavItem52 from "../NavItem52";
import SubnavContainer2 from "../SubnavContainer2";
import "./Menu8.sass";

import { SideNavContext } from "../../contexts";

function Menu8(props) {
  const { line4, frame279Props, navItem3Props, navItem102Props, navItem5Props, frame281Props } = props;

  const { makeSideNavProps } = React.useContext(SideNavContext) || {};

  const navItemProps = makeSideNavProps([
    frame279Props?.navItem1Props,
    frame279Props?.navItem2Props,
    frame279Props?.navItem2Props2,
    navItem3Props?.component12Props,
    navItem102Props?.component13Props,
    navItem5Props?.component14Props,
    frame281Props?.navItem6Props,
    frame281Props?.navItem7Props,
    frame281Props?.navItem8Props
  ]);

  return (
    <div className="nav-6">
      <SubnavContainer
        line4={frame279Props?.line4}
        navItem1Props={navItemProps[0]}
        navItem2Props={navItemProps[1]}
        navItem2Props2={navItemProps[2]}
      />
      <div className="subnav_container-28">
        <div className="text-124 notosanssc-bold-tundora-26px">产品管理</div>
        <img className="line-4-17" src={line4} alt="Line 4" />
        <div className="subnav-28">
          <NavItem92 component12Props={navItemProps[3]} />
          <NavItem102 component13Props={navItemProps[4]} />
          <NavItem52 component14Props={navItemProps[5]} />
        </div>
      </div>
      <SubnavContainer2
        navItem6Props={navItemProps[6]}
        navItem7Props={navItemProps[7]}
        navItem8Props={navItemProps[8]}
      />
    </div>
  );
}

export default Menu8;
