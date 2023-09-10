import React from "react";
import NavItem16 from "../NavItem16";
import NavItem from "../NavItem";
import NavItem2 from "../NavItem2";
import SubnavContainer32 from "../SubnavContainer32";
import SubnavContainer2 from "../SubnavContainer2";
import "./Nav9.sass";

import { SideNavContext } from "../../contexts";
function Nav9(props) {
  const {
    text184,
    line4,
    navItem16Props,
    navItemProps,
    navItem2Props,
    subnavContainer32Props,
    subnavContainer2Props,
  } = props;
  
  console.log(SideNavContext);
  const { makeSideNavProps } = React.useContext(SideNavContext) || {};
  
  const sideNavProps = makeSideNavProps([
    navItem16Props,
    navItemProps,
    navItem2Props,
    subnavContainer32Props.navItem3Props,
    subnavContainer32Props.navItem102Props,
    subnavContainer32Props.navItem52Props,
    subnavContainer2Props.navItem6Props,
    subnavContainer2Props.navItem7Props,
    subnavContainer2Props.navItem8Props
  ]);

  console.log("this is sidenavprops", sideNavProps);
  return (
    <div className="nav-10">
      <div className="subnav_container-32">
        <div className="text-184 notosanssc-bold-tundora-26px">{text184}</div>
        <img className="line-4-21" src={line4} alt="Line 4" />
        <div className="subnav-32">
          <NavItem16 {...sideNavProps[0] /*
            icon_Regular={navItem16Props.icon_Regular}
            text_Label={navItem16Props.text_Label}
            className={navItem16Props.className} */}
          />
          <NavItem {...sideNavProps[1] /*
            component1={navItemProps.component1}
            text_Label={navItemProps.text_Label}
          className={navItemProps.className} */}
          />
          <NavItem2 {...sideNavProps[2] /*component1Props={navItem2Props.component1Props}*/} />
        </div>
      </div>
      <SubnavContainer32 
        navItem3Props={sideNavProps[3] /*subnavContainer32Props.navItem3Props*/}
        navItem102Props={sideNavProps[4] /*subnavContainer32Props.navItem102Props*/}
        navItem52Props={sideNavProps[5] /*subnavContainer32Props.navItem52Props*/}
      />
      <SubnavContainer2
        navItem6Props={sideNavProps[6] /*subnavContainer2Props.navItem6Props*/}
        navItem7Props={sideNavProps[7] /*subnavContainer2Props.navItem7Props*/}
        navItem8Props={sideNavProps[8] /*subnavContainer2Props.navItem8Props*/}
      />
    </div>
  );
}

export default Nav9;
