import React from "react";
import RightItem from "../RightItem";
import "./DataContainer.sass";

function DataContainer(props) {
  const { rightItem1Props, rightItem2Props, rightItem3Props } = props;

  return (
    <div className="data_container">
      <RightItem text182={rightItem1Props.text182} textButton22Props={rightItem1Props.textButton22Props} />
      <RightItem text182={rightItem2Props.text182} textButton22Props={rightItem2Props.textButton22Props} />
      <RightItem text182={rightItem3Props.text182} textButton22Props={rightItem3Props.textButton22Props} />
    </div>
  );
}

export default DataContainer;
