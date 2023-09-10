import React from "react";
import "./PromptContainer.sass";

function PromptContainer() {
  return (
    <div className="prompt_container">
      <div className="flex-container notosanssc-normal-hippie-blue-16px">
        <div className="text-27">
          <span className="notosanssc-normal-hippie-blue-16px">上传后需填写证书类型与产品编号，以覆盖文件名。</span>
        </div>
        <div className="text-27">
          <span className="notosanssc-normal-hippie-blue-16px">上传后将覆盖同名证书。</span>
        </div>
      </div>
    </div>
  );
}

export default PromptContainer;
