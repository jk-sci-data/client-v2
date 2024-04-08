import React from "react";
import "./QrcodeContainer.sass";

function QrcodeContainer(props) {
  const { rectangle } = props;

  return (
    <div className="qrcode_container">
      <div className="text-2 valign-text-middle notosanssc-normal-shark-16px">服务科技与工业发展 造福人类</div>
      <div className="qrcode">
        <img className="rectangle" src={rectangle} alt="Rectangle" />
        <div className="text-3 notosanssc-normal-tundora-16px">关注微信公众号</div>
      </div>
    </div>
  );
}

export default QrcodeContainer;
