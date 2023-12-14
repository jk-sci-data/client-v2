import React from 'react'

import "./AccountInfoList.sass";
import AccountInfoItem from "components/AccountInfoItem";
import TitleWithBubbleBox from "components/TitleWithBubbleBox/";
import Note from "components/Note";
import IconMore from "../../dist/img/icon-more.png";
import MainApp from "components/MainApp";

const accountInfoData = [
  { title: '账号关联公司', name: 'J&K百灵威', linkText: '', linkHref: '#' },
  { title: '账号持有人', name: '李明', linkText: '修改持有人', linkHref: '#' },
  { title: '账号名称', name: 'Username141', linkText: '修改账号名称', linkHref: '#' },
  { title: '绑定邮箱', name: 'sfnzf@adfta.com', linkText: '更换邮箱', linkHref: '#' },
  { title: '绑定手机', name: '133*********51', linkText: '更换手机', linkHref: '#' },
  { title: '账号密码', name: '***********', linkText: '修改密码', linkHref: '#' },
];

function AccountInfoList() {
  return (
    <MainApp>
      <div className="main_container" style={{ width: "100%", alignItems: "unset" }}> 
         <TitleWithBubbleBox
          title="账户信息"
          bubbleContent="Bubble Content for 账户信息"
          />  

          <Note content="修改权限，请联系账户管理员" />

        {accountInfoData.map((item, index) => (
          <AccountInfoItem
            key={index}
            title={item.title}
            name={item.name}
            linkText={item.linkText}
            linkHref={item.linkHref}
          />
        ))}
        <div className="main-bottom ">
          <a href='#' className="more">更多<img src={IconMore} alt="more"/></a>
          <a href='#' className="confirm">确认账号权限</a>
        </div>
      </div>
    </MainApp>
  );
}

export default AccountInfoList;