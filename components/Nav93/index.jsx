import React from "react";
import SubnavContainer from "../SubnavContainer";
import NavItem3 from "../NavItem3";
import NavItem163 from "../NavItem163";
import NavItem52 from "../NavItem52";
import SubnavContainer2 from "../SubnavContainer2";
import "./Nav93.sass";

function Nav93(props) {
  const { text198, line4, subnavContainerProps, navItem3Props, navItem16Props, navItem5Props, frame281Props } = props;

  return (
    <div className="nav-5">
      <SubnavContainer
        line4={subnavContainerProps.line4}
        navItem1Props={subnavContainerProps.navItem1Props}
        navItem2Props={subnavContainerProps.navItem2Props}
        navItem2Props2={subnavContainerProps.navItem2Props2}
      />
      <div className="subnav_container-27">
        <div className="text-120 notosanssc-bold-tundora-26px">{text198}</div>
        <img className="line-4-16" src={line4} alt="Line 4" />
        <div className="subnav-27">
          <NavItem3 component12Props={navItem3Props.component12Props} />
          <NavItem163 text_Label={navItem16Props.text_Label} component13Props={navItem16Props.component13Props} />
          <NavItem52 component14Props={navItem5Props.component14Props} />
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

export default Nav93;
