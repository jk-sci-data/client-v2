import React from "react";
import PromptBox from "../PromptBox";
import "./UploadWindowLarge.sass";

function UploadWindowLarge(props) {
  const { className, handleUpload, handleFileChange } = props;
  const inputRef = React.useRef(null);

  const handleClick = (evt) => {
    console.log("upload window should open...")
    inputRef.current.click();
  };
  
  return (
    <div>
    <div className={`upload_window_large ${className || ""}`} onClick={handleClick} style={{ cursor: "pointer" }}>
      <PromptBox onClick={handleClick} />
      <input ref={inputRef} type="file" style={{ display: "none" }} onChange={handleFileChange ?? (() => console.log("no handleFileChange defined"))} />
    </div>
    <div>
      <button type="button" style={{"background": "blue"}} onClick={handleUpload}>Upload</button>
    </div>
    </div>
  );
}

export default UploadWindowLarge;
