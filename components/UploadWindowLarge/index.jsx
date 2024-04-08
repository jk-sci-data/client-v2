import React from "react";
import PromptBox from "../PromptBox";
import "./UploadWindowLarge.sass";

function UploadWindowLarge(props) {
  const { className } = props;
  const inputRef = React.useRef(null);

  const handleClick = (evt) => {
    console.log("upload window should open...")
    inputRef.current.click();
  };

  const handleUpload = props.handleUpload || (() => {});
  return (
    <div className={`upload_window_large ${className || ""}`} onClick={handleClick} style={{cursor:"pointer"}}>
      <PromptBox onClick={handleClick}/>
      <input ref={inputRef} type="file" style={{display:"none"}} onChange={handleUpload}/>
    </div>
  );
}

export default UploadWindowLarge;
