import React from "react";
import NavItem6 from "../NavItem6";
import NavItem7 from "../NavItem7";
import NavItem8 from "../NavItem8";
import "./SubnavContainer2.sass";

function SubnavContainer2(props) {
  const { navItem6Props, navItem7Props, navItem8Props } = props;

  return (
    <div className="subnav_container-20">
      <div className="text-101 notosanssc-bold-tundora-26px">产品询价</div>
      <img className="line-5-4" src="/img/line-4@2x.png" alt="Line 5" />
      <div className="subnav-20">
        <NavItem6 iconRegular5Props={navItem6Props.iconRegular5Props} />
        <NavItem7 iconRegular6Props={navItem7Props.iconRegular6Props} />
        <NavItem8 iconRegular7Props={navItem8Props.iconRegular7Props} />
      </div>
    </div>
  );
}

export default SubnavContainer2;
