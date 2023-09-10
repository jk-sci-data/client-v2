import React from "react";
import SubnavContainer from "../SubnavContainer";
import SubnavContainer32 from "../SubnavContainer32";
import NavItem6 from "../NavItem6";
import NavItem7 from "../NavItem7";
import NavItem1323 from "../NavItem1323";
import "./Menu52.sass";

function Menu52(props) {
  const { text134, line5, frame279Props, frame280Props, navItem6Props, navItem7Props, navItem13Props } = props;

  return (
    <div className="nav">
      <SubnavContainer
        line4={frame279Props.line4}
        navItem1Props={frame279Props.navItem1Props}
        navItem2Props={frame279Props.navItem2Props}
        navItem2Props2={frame279Props.navItem2Props2}
      />
      <SubnavContainer32
        navItem3Props={frame280Props.navItem3Props}
        navItem102Props={frame280Props.navItem102Props}
        navItem52Props={frame280Props.navItem52Props}
      />
      <div className="subnav_container">
        <div className="text-20 notosanssc-bold-tundora-26px">{text134}</div>
        <img className="line-5" src={line5} alt="Line 5" />
        <div className="subnav">
          <NavItem6 iconRegular5Props={navItem6Props.iconRegular5Props} />
          <NavItem7 iconRegular6Props={navItem7Props.iconRegular6Props} />
          <NavItem1323 text_Label={navItem13Props.text_Label} component17Props={navItem13Props.component17Props} />
        </div>
      </div>
    </div>
  );
}

export default Menu52;
