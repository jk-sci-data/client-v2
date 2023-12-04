import React from "react";
import BtnText10 from "../BtnText10";
import "./RightContainer.sass";

function RightContainer(props) {
  const { items } = props;

  return (
    <div className="right_container">
      {
        items.map((item) => (
          <article className={`btn_text-21-1 ${item.className || ""}`}>
            <div className="text_label-135 valign-text-middle notosanssc-normal-tundora-16px">{item.children}</div>
          </article>
        ))
      }
    </div>
  );
}

export default RightContainer;
