// AccountSettingItem.js
import React from 'react';
import "./AccountSettingList.sass";
import IconCircleOpen from "../../dist/img/icon_cirecle_open.png";
import IconCircleClose from "../../dist/img/icon_cirecle_close.png";

const AccountSettingItem = ({ title, isOpen }) => {
  return (
    <div className="account-setting-item">
      <div className="title">{title}</div>
      <div className={isOpen ? "report-open" : "report-close"}>
        <img src={isOpen ? IconCircleOpen : IconCircleClose} alt={isOpen ? "Open" : "Close"} />
        {isOpen ? '开启' : '关闭'}
      </div>
    </div>
  );
};

export default AccountSettingItem;
