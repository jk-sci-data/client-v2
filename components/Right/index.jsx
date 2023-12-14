import React from "react";
import IconRegular8 from "../IconRegular8";
import "./Right.sass";

function Right() {
  return (
    <div className="right">
      <a href="#" className="preview-link">
        <div className="preview_container">
          <IconRegular8 />
          <div className="preview notosanssc-normal-shark-16px">预览</div>
        </div>
      </a>
      <a href="#" className="image-link">
        <img className="icon_regular-101" src="/img/component-1-21@2x.png" alt="icon_regular" />
      </a>
    </div>
  );
}

export default Right;
