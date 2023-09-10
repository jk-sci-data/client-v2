import React from "react";
import NavItem from "../NavItem";
import NavItem12 from "../NavItem12";
import SubnavContainer32 from "../SubnavContainer32";
import SubnavContainer2 from "../SubnavContainer2";
import "./Nav4.sass";

function Nav4(props) {
  const {
    text65,
    line4,
    navItem1Props,
    navItem2Props,
    navItem12Props,
    subnavContainer3Props,
    subnavContainer2Props,
  } = props;

  return (
    <div className="nav-8">
      <div className="subnav_container-30">
        <div className="text-157 notosanssc-bold-tundora-26px">{text65}</div>
        <img className="line-4-19" src={line4} alt="Line 4" />
        <div className="subnav-30">
          <NavItem component1={navItem1Props.component1} text_Label={navItem1Props.text_Label} />
          <NavItem
            component1={navItem2Props.component1}
            text_Label={navItem2Props.text_Label}
            className={navItem2Props.className}
          />
          <NavItem12 text_Label={navItem12Props.text_Label} component1Props={navItem12Props.component1Props} />
        </div>
      </div>
      <SubnavContainer32
        navItem3Props={subnavContainer3Props.navItem3Props}
        navItem102Props={subnavContainer3Props.navItem102Props}
        navItem52Props={subnavContainer3Props.navItem52Props}
      />
      <SubnavContainer2
        navItem6Props={subnavContainer2Props.navItem6Props}
        navItem7Props={subnavContainer2Props.navItem7Props}
        navItem8Props={subnavContainer2Props.navItem8Props}
      />
    </div>
  );
}

export default Nav4;
