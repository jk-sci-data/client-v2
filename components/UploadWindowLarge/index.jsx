import React, { useContext, useRef } from "react";
import PromptBox from "../PromptBox";
import "./UploadWindowLarge.sass";
import { InputContext } from "contexts/InputContext";

function UploadWindowLarge(props) {
  const { className } = props;
  const fileInputRef = useRef(null);
  const { field, form } = useContext(InputContext);

  const handleClick = (evt) => {
    console.log("upload window should open...");
    fileInputRef.current.click();
  };

  const handleFileChange = (evt) => {
    const file = evt.target.files[0];
    const syntheticEvent = {
      target: {
        name: field.name,
        value: file,
      },
    };
    field.onChange(syntheticEvent);
  };

  return (
    <div>
      <div
        className={`upload_window_large ${className || ""}`}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <PromptBox onClick={handleClick} />
        <input
          type="file"
          style={{ display: "none" }}
          {...field}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default UploadWindowLarge;