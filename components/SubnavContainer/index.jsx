import React from "react";
import NavItem from "../NavItem";
import NavItem2 from "../NavItem2";
import "./SubnavContainer.sass";

function SubnavContainer(props) {
  const { line4, navItem1Props, navItem2Props, navItem2Props2 } = props;

  console.log("navItem1Props", navItem1Props)
  const activeClass = navItem2Props.className;
  return (
    <div className="subnav_container-1">
      <div className="text-18 notosanssc-bold-tundora-26px">账户设置</div>
      <img className="line-4" src={line4} alt="Line 4" />
      <div className="subnav-1">
        <NavItem {...navItem1Props} />
        <NavItem {...navItem2Props} />
        <NavItem2 {...navItem2Props2} />
      </div>
    </div>
  );
}

export default SubnavContainer;
