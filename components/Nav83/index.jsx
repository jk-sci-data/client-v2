import React from "react";
import SubnavContainer from "../SubnavContainer";
import NavItem3 from "../NavItem3";
import NavItem102 from "../NavItem102";
import NavItem153 from "../NavItem153";
import SubnavContainer2 from "../SubnavContainer2";
import "./Nav83.sass";

function Nav83(props) {
  const { text178, line4, subnavContainerProps, navItem3Props, navItem102Props, navItem15Props, frame281Props } = props;

  return (
    <div className="nav-4">
      <SubnavContainer
        line4={subnavContainerProps.line4}
        navItem1Props={subnavContainerProps.navItem1Props}
        navItem2Props={subnavContainerProps.navItem2Props}
        navItem2Props2={subnavContainerProps.navItem2Props2}
      />
      <div className="subnav_container-19">
        <div className="text-100 notosanssc-bold-tundora-26px">{text178}</div>
        <img className="line-4-15" src={line4} alt="Line 4" />
        <div className="subnav-19">
          <NavItem3 component12Props={navItem3Props.component12Props} />
          <NavItem102 component13Props={navItem102Props.component13Props} />
          <NavItem153 text_Label={navItem15Props.text_Label} component14Props={navItem15Props.component14Props} />
        </div>
      </div>
      <SubnavContainer2
        navItem6Props={frame281Props.navItem6Props}
        navItem7Props={frame281Props.navItem7Props}
        navItem8Props={frame281Props.navItem8Props}
      />
    </div>
  );
}

export default Nav83;
