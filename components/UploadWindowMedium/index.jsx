import React from "react";
import UploadWindowSmall from "../UploadWindowSmall";
import "./UploadWindowMedium.sass";

function UploadWindowMedium(props) {
  const { uploadWindowSmallProps } = props;

  return (
    <div className="upload_window_medium-1">
      <UploadWindowSmall text_Label={uploadWindowSmallProps.text_Label} />
    </div>
  );
}

export default UploadWindowMedium;
