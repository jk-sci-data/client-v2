import React from "react";
import Word from "../Word";
import Right from "../Right";
import "./UploadedItem.sass";

function UploadedItem(props) {
  const { wordProps } = props;

  return (
    <div className="uploaded-item">
      <div className="left">
        <Word className={wordProps.className} />
        <div className="document-name notosanssc-normal-black-16px">经营许可证.DOCX</div>
      </div>
      <Right />
    </div>
  );
}

export default UploadedItem;
