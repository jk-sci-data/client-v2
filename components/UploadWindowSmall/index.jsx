import React from "react";
import Frame291 from "../Frame291";
import "./UploadWindowSmall.sass";

function UploadWindowSmall(props) {
  const { text_Label } = props;

  return (
    <div className="upload_window_small-1">
      <div className="frame">
        <Frame291 />
        <div className="frame">
          <div className="text_label-127 valign-text-middle notosanssc-normal-granite-gray-16px">{text_Label}</div>
        </div>
      </div>
    </div>
  );
}

export default UploadWindowSmall;
