import React from "react";
import SubnavContainer from "../SubnavContainer";
import SubnavContainer32 from "../SubnavContainer32";
import NavItem152 from "../NavItem152";
import NavItem7 from "../NavItem7";
import NavItem8 from "../NavItem8";
import "./Nav82.sass";

function Nav82(props) {
  const { subnavContainerProps, subnavContainer3Props, navItem15Props, navItem7Props, navItem8Props } = props;

  return (
    <div className="nav-2">
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
      <div className="subnav_container-17">
        <div className="text-63-1 notosanssc-bold-tundora-26px">产品询价</div>
        <img className="line-5-2" src="/img/line-4@2x.png" alt="Line 5" />
        <div className="subnav-17">
          <NavItem152 iconRegular5Props={navItem15Props.iconRegular5Props} />
          <NavItem7 iconRegular6Props={navItem7Props.iconRegular6Props} />
          <NavItem8 iconRegular7Props={navItem8Props.iconRegular7Props} />
        </div>
      </div>
    </div>
  );
}

export default Nav82;
