import React from "react";
import NavItem3 from "../NavItem3";
import NavItem102 from "../NavItem102";
import NavItem52 from "../NavItem52";
import "./SubnavContainer32.sass";

function SubnavContainer32(props) {
  const { navItem3Props, navItem102Props, navItem52Props } = props;

  return (
    <div className="subnav_container-9">
      <div className="text-19 notosanssc-bold-tundora-26px">产品管理</div>
      <img className="line-4-8" src="/img/line-4@2x.png" alt="Line 4" />
      <div className="subnav-9">
        <NavItem3 component12Props={navItem3Props.component12Props} />
        <NavItem102 component13Props={navItem102Props.component13Props} />
        <NavItem52 component14Props={navItem52Props.component14Props} />
      </div>
    </div>
  );
}

export default SubnavContainer32;
