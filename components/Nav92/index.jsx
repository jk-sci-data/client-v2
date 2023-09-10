import React from "react";
import SubnavContainer from "../SubnavContainer";
import SubnavContainer32 from "../SubnavContainer32";
import NavItem6 from "../NavItem6";
import NavItem162 from "../NavItem162";
import NavItem8 from "../NavItem8";
import "./Nav92.sass";

function Nav92(props) {
  const {
    text178,
    line5,
    subnavContainerProps,
    subnavContainer3Props,
    navItem6Props,
    navItem16Props,
    navItem8Props,
  } = props;

  return (
    <div className="nav-1">
      <SubnavContainer
        line4={subnavContainerProps.line4}
        navItem1Props={subnavContainerProps.navItem1Props}
        navItem2Props={subnavContainerProps.navItem2Props}
        navItem2Props2={subnavContainerProps.navItem2Props2}
      />
      <SubnavContainer32
        navItem3Props={subnavContainer3Props.navItem3Props}
        navItem102Props={subnavContainer3Props.navItem102Props}
        navItem52Props={subnavContainer3Props.navItem52Props}
      />
      <div className="subnav_container-16">
        <div className="text-54 notosanssc-bold-tundora-26px">{text178}</div>
        <img className="line-5-1" src={line5} alt="Line 5" />
        <div className="subnav-16">
          <NavItem6 iconRegular5Props={navItem6Props.iconRegular5Props} />
          <NavItem162 text_Label={navItem16Props.text_Label} iconRegular6Props={navItem16Props.iconRegular6Props} />
          <NavItem8 iconRegular7Props={navItem8Props.iconRegular7Props} />
        </div>
      </div>
    </div>
  );
}

export default Nav92;
