import React from "react";
import NavItem from "../NavItem";
import NavItem16 from "../NavItem16";
import NavItem2 from "../NavItem2";
import SubnavContainer32 from "../SubnavContainer32";
import SubnavContainer2 from "../SubnavContainer2";
import "./Nav8.sass";

function Nav8(props) {
  const {
    text169,
    line4,
    navItemProps,
    navItem16Props,
    navItem2Props,
    subnavContainer32Props,
    subnavContainer2Props,
  } = props;

  return (
    <div className="nav-9">
      <div className="subnav_container-31">
        <div className="text-169 notosanssc-bold-tundora-26px">{text169}</div>
        <img className="line-4-20" src={line4} alt="Line 4" />
        <div className="subnav-31">
          <NavItem component1={navItemProps.component1} text_Label={navItemProps.text_Label} />
          <NavItem16 icon_Regular={navItem16Props.icon_Regular} text_Label={navItem16Props.text_Label} />
          <NavItem2 component1Props={navItem2Props.component1Props} />
        </div>
      </div>
      <SubnavContainer32
        navItem3Props={subnavContainer32Props.navItem3Props}
        navItem102Props={subnavContainer32Props.navItem102Props}
        navItem52Props={subnavContainer32Props.navItem52Props}
      />
      <SubnavContainer2
        navItem6Props={subnavContainer2Props.navItem6Props}
        navItem7Props={subnavContainer2Props.navItem7Props}
        navItem8Props={subnavContainer2Props.navItem8Props}
      />
    </div>
  );
}

export default Nav8;
